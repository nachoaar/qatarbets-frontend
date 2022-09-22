import React from "react";
import axios from "axios"
import { useState } from "react";
import { getNewAvatar } from "../../redux/actions/internalUserActions";
import { useDispatch } from "react-redux";

function PfpInput(){

    const [imageSelected,setImageSelected]= useState('')
    const dispatch = useDispatch()

   

    const uploadImage =async()=>{
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset","qatar-bets")

       axios.post("https://api.cloudinary.com/v1_1/dztdwrxys/image/upload", formData)

        dispatch(getNewAvatar())
    }

//     const [previewSource, setPreviewSource] = useState()
//     const [fileInputState, setFileInputState] = useState('')
//     const [selectedFile, setSelectedFile] = useState('')

//     const handleSubmitFile = (e) =>{
//         e.preventDefault()
//         if(!selectedFile){
//             uploadImage(previewSource)
//         }
//     }
//     const uploadImage = (base64EncodeImage)=>{
//         console.log(base64EncodeImage)
//         try{

//         }catch(error){
//             console.log(error)
//         }

//  }


//     const handleFileInputChange = (event) =>{
//         const file = event.target.files[0]
//         previewFile(file)
//     }

//     const previewFile = (file) => {
//         const reader = new FileReader()
//         reader.readAsDataURL(file)
//         reader.onloadend  = () =>{
//             setPreviewSource(reader.result)
//         }
//     }

    return (
        <div>
            <input type="file" name="image"  className="from-input" onChange={(event)=>{ setImageSelected(event.target.files[0])}} />
            <button clasName='btn' onClick={uploadImage} type="submit">
                 submit
             </button>     
        </div>
    )
}


export default PfpInput