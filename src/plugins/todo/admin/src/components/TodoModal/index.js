// @ts-nocheck
import React, { useState } from "react";
import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Typography,
  TextInput,
} from "@strapi/design-system";

const TodoModal = ({ setIsVisible, addTodo }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addTodo({ name: name });
      setIsVisible(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (name.length > 40) {
      return "Content is too long";
    }

    return null;
  };
  return (
    <ModalLayout
      onClose={() => setIsVisible(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Create todo item
        </Typography>
      </ModalHeader>
      <ModalBody>
        <TextInput
          placeholder="What do you need to do?"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </ModalBody>
      <ModalFooter
        startActions={
          <Button
            variant="tertiary"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            Cancel
          </Button>
        }
        endActions={
          <>
            <Button type="submit" variant="secondary">
              Add new item
            </Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default TodoModal;
