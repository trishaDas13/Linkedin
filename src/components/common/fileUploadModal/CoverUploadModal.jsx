import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import "./style.scss";

const CoverUploadModal = ({
  modalOpen,
  setModalOpen,
  getCoverImage,
  uploadCoverImage,
  coverPhoto,
  progress
}) => {
  return (
    <div>
      <Modal
        title="Update cover photo"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={uploadCoverImage}
            disabled={coverPhoto.name ? false : true}
          >
            Upload
          </Button>,
        ]}
      >
         {progress === 0 ? <></> : <Progress percent={progress} />}
        <div className="chooseCover">
          <label className="file">Upload Cover Photo </label>
          <input
            type="file"
            id="file"
            name="cover_photo"
            onChange={getCoverImage}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CoverUploadModal;
