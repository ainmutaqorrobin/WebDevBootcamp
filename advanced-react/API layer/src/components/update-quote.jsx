import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postQuote, resetQuotes } from "../api/quoteApi";
import { toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: lg;
  margin: auto;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button`
  type: ${(props) => props.type};
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`;

function UpdateQuotes() {
  const queryClient = useQueryClient();
  const createQuoteMutation = useMutation(postQuote);
  const resetQuoteMutation = useMutation((e) => resetQuotes());

  const [form, setForm] = useState({ author: "", quote: "" });

  const resetForm = () => {
    setForm({ author: "", quote: "" });
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { author, quote } = form;
    if (!author || !quote) {
      alert("Please fill in the required form first.");
      return;
    }

    await createQuoteMutation.mutate(form, {
      onSuccess: () => {
        resetForm();
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quotes created");
      },
    });
  };

  const onReset = (e) => {
    resetQuoteMutation.mutate(e, {
      onSuccess: () => {
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quotes resetted");
      },
    });
  };
  return (
    <Container>
      <Title>Author</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Author</Label>
          <Input
            type="text"
            id="author"
            value={form.author}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Quote</Label>
          <Input
            type="text"
            id="quote"
            value={form.quote}
            onChange={onChange}
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            isLoading={createQuoteMutation.isLoading}
            disabled={createQuoteMutation.isLoading}
          >
            {createQuoteMutation.isLoading
              ? "Creating quote..."
              : "Create quote"}
          </Button>
          <Button
            type="button"
            onClick={onReset}
            isLoading={resetQuoteMutation.isLoading}
            disabled={resetQuoteMutation.isLoading}
          >
            {resetQuoteMutation.isLoading ? "Resetting..." : "Reset quotes"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default UpdateQuotes;
