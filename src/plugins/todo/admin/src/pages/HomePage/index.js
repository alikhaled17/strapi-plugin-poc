// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  BaseHeaderLayout,
  ContentLayout,
  Layout,
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system";
import { Illo } from "../../components/Illo";
import { Plus } from "@strapi/icons";
import TodoModal from "../../components/TodoModal";
import { nanoid } from "nanoid";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

const HomePage = () => {
  const [IsVisible, setIsVisible] = useState(false);
  const [TodoData, setTodoData] = useState([]);

  async function addTodo(data) {
    setTodoData([...TodoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }

  return (
    <Layout sideNav={undefined}>
      <BaseHeaderLayout title={`${pluginId.toUpperCase()} Plugin`} as="h2" />
      <ContentLayout>
        {TodoData.length ? (
          <>
            <TodoCount count={TodoData.length} />
            <TodoTable
              todoData={TodoData}
              setShowModal={setIsVisible}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        ) : (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any content yet..."
            action={
              <Button
                variant="secondary"
                startIcon={<Plus />}
                onClick={() => setIsVisible(!IsVisible)}
              >
                Create your first todo item
              </Button>
            }
          />
        )}
      </ContentLayout>
      {IsVisible && <TodoModal addTodo={addTodo} setIsVisible={setIsVisible} />}
    </Layout>
  );
};

export default HomePage;
