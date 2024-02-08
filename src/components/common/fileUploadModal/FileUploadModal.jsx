import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";

const FileUploadModal = ({
  modalOpen,
  setModalOpen,
  getProfileImage,
  uploadProfileImage,
  profilePhoto,
  progress,
}) => {
  return (
    <div>
      <Modal
        title="Update profile photo"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={uploadProfileImage}
            disabled={profilePhoto.name ? false : true}
          >
            Upload
          </Button>,
        ]}
      >
        {progress === 0 ? <></> : <Progress percent={progress} />}
        <div className="chooseCover">
          <label className="file">Upload Profile Photo </label>
          <input
            type="file"
            id="file"
            name="profile_photo"
            onChange={getProfileImage}
          />
        </div>
      </Modal>
    </div>
  );
};

export default FileUploadModal;
