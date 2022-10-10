import { useState } from "react";
import axios from "axios";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Container,
  Title,
  Group,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { bodyChecker } from "../libs/bodyChecker";

export default function Lecture17() {
  const form = useForm({
    validate: zodResolver(bodyChecker),
    initialValues: {
      email: "",
      pwd: "",
      address: "",
      gender: "",
      plan: "",
    },
  });

  async function submitForm() {
    try {
      const resp = await axios.post("/api/register", form.values);
      if (resp.data.ok) alert("Register Successfully");
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Container size="sm">
      <form onSubmit={form.onSubmit(() => submitForm())}>
        <div>
          <Title order={3} align="center" color="violet">
            CMU Marathon 2022
          </Title>
          <Group grow>
            <TextInput
              label="email"
              color="violet"
              placeholder="Please insert email"
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Password"
              color="violet"
              placeholder="6 - 12 characters"
              {...form.getInputProps("pwd")}
            />
          </Group>
          <Textarea
            label="address"
            rows="3"
            color="violet"
            placeholder="adress.."
            {...form.getInputProps("address")}
          />
          <Group grow>
            <Select
              label="Gender"
              color="violet"
              data={[
                { value: "male", label: "Male (เพศชาย)" },
                { value: "female", label: "Female (เพศหญิง)" },
              ]}
              placeholder="Please select..."
              {...form.getInputProps("gender")}
            />
            <Select
              label="Plan"
              color="violet"
              data={[
                { value: "full", label: "Full Marathon (42.195 KM)" },
                { value: "half", label: "Half Marathon (21.1 KM)" },
                { value: "mini", label: "Mini Marathon (10.5 KM)" },
              ]}
              placeholder="Please select..."
              {...form.getInputProps("plan")}
            />
          </Group>
          <Button type="submit" m="sm" color="violet">
            Register
          </Button>
        </div>
      </form>
    </Container>
  );
}
