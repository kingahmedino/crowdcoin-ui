import { Global } from "@mantine/core";

export default function OurGlobalStyles() {
  return (
    <Global
      styles={{
        body: {
          overflowY: "hidden",
        },
      }}
    />
  );
}
