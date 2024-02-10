import React, {useState} from "react";
import { Button, Modal } from "antd";
import "./style.scss";
import { ImageGalleryIcon } from "../topbar/SVGstorage";
import { Progress, Space } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ModalCtx = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus,
  postImage,
  setPosttImage,
  uploadPostImage,
  currentPost,
  setCurrentPost
}) => {
  const[progress, setProgress] = useState(0);
  return (
    <>
      <Modal
        title="Create a post"
        style={{
          top: 20,
        }}
        open={modalOpen}
        onOk={() => {setModalOpen(false)
          setStatus("")
          setCurrentPost('')
          setPosttImage("")}}
        onCancel={() => {setModalOpen(false)
                       setStatus("")
                       setPosttImage("")
                       setCurrentPost('')}}
                       
        footer={
          <Button
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            onClick={isEdit ? updateStatus : sendStatus}
          >
            {isEdit ? 'Update' : 'Post'}
          </Button>
        }
      >
        <ReactQuill
          theme="snow"
          className="modalInput"
          placeholder="What do you want to talk about?"
          onChange={setStatus}
          value={status}
        />;
        {
          progress === 0 || progress === 100 ? <></> : (
            <div className="progressBar">
               <Progress type="circle" percent={progress} />
            </div>
          )
        }

        {
            postImage.length > 0 || currentPost?.postImage?.length ? <>
            <img src={postImage || currentPost?.postImage} alt="post Image" className="postImage"/>
            <span className="crossImage" onClick={()=>setPosttImage('')}>X</span></> : null          
        }

        
        <label htmlFor="pic-upload">
          <ImageGalleryIcon/>       
        <input 
          type="file" 
          id='pic-upload'
          hidden
          onChange={(event) =>
            uploadPostImage(event.target.files[0], setPosttImage, setProgress)
          }/>
           </label>
      </Modal>
    </>
  );
};
export default ModalCtx;
