import React from "react";
import { Button, Modal } from "antd";
import "./style.scss";

const ModalCtx = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        style={{
          top: 20,
        }}
        open={modalOpen}
        onOk={() => {setModalOpen(false)
          setStatus("")}}
        onCancel={() => {setModalOpen(false)
                       setStatus("")}}
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
        <textarea
          cols="30"
          rows="10"
          className="modalInput"
          placeholder="What do you want to talk about?"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        ></textarea>
      </Modal>
    </>
  );
};
export default ModalCtx;
