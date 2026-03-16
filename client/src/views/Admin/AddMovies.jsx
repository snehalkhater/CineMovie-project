import { useEffect, useState, useRef } from "react";
import { setPageTitle, getuserJwtToken } from "../../utils.jsx";
import AdminNavbar from "../../components/AdminNavbar";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/react";
import PhotoViewer from "../../components/PhotoViewer.jsx";

function AddMovie() {

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    releaseDate: "",
    poster: ""
  })

  const [progress, setProgress] = useState(0)

  const fileInputRef = useRef()


  // ImageKit Authentication
  const authenticator = async () => {

    try {

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth`)

      const data = await response.json()

      const { signature, expire, token, publicKey } = data

      return { signature, expire, token, publicKey }

    } catch (error) {

      console.error("Authentication error:", error)

    }

  }


  // Upload Poster
  const handleUpload = async () => {

    const fileInput = fileInputRef.current

    if (!fileInput || !fileInput.files.length) {
      toast.error("Please select file")
      return
    }

    const file = fileInput.files[0]

    let authParams

    try {

      authParams = await authenticator()

    } catch (error) {

      console.error("Auth error", error)
      return

    }

    const { signature, expire, token, publicKey } = authParams

    try {

      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        onProgress: (event) => {
          setProgress(Math.round((event.loaded / event.total) * 100))
        }
      })

      setNewMovie({
        ...newMovie,
        poster: uploadResponse.url
      })

      setTimeout(() => {
        setProgress(0)
      }, 1000)

      fileInput.value = ""

    } catch (error) {

      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason)
      }
      else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message)
      }
      else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message)
      }
      else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message)
      }
      else {
        console.error("Upload error:", error)
      }

    }

  }


  // Add Movie API
  const addMovie = async () => {

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/add-movie`,
        newMovie,
        {
          headers: {
            Authorization: `Bearer ${getuserJwtToken()}`
          }
        }
      )

      if (response.data.success) {

        toast.success(response.data.message)

        setNewMovie({
          title: "",
          description: "",
          releaseDate: "",
          poster: ""
        })

      } else {

        toast.error("Failed to add movie")

      }

    } catch (error) {

      console.log(error)
      toast.error("Server error")

    }

  }


  // Page Title
  useEffect(() => {
    setPageTitle("Add Movie")
  }, [])


  return (

    <div>

      <AdminNavbar />

      <h1 className="text-center mt-50 text-xl font-semibold">
        Add New Movie 🎬
      </h1>

      <div className="w-80 block mx-auto mt-5 space-y-3">

        <Input
          type="text"
          placeholder="Enter Movie Title"
          value={newMovie.title}
          onChange={(e) => {
            setNewMovie({
              ...newMovie,
              title: e.target.value
            })
          }}
        />

        <Input
          type="text"
          placeholder="Enter Description"
          value={newMovie.description}
          onChange={(e) => {
            setNewMovie({
              ...newMovie,
              description: e.target.value
            })
          }}
        />

        <Input
          type="date"
          value={newMovie.releaseDate}
          onChange={(e) => {
            setNewMovie({
              ...newMovie,
              releaseDate: e.target.value
            })
          }}
        />



        {newMovie.poster && (

          <PhotoViewer
            imgUrl={newMovie.poster}
          />

        )}



        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
        />


        {/* Upload Progress */}

        {progress > 0 && (

          <p className="text-sm text-gray-600">
            Uploading... {progress}%
          </p>

        )}

      </div>


      <div className="w-80 block mx-auto mt-10">

        <Button
          title="Add Movie"
          varient="primary"
          size="large"
          onClick={addMovie}
        />

      </div>


      <Toaster />

    </div>

  )

}

export default AddMovie