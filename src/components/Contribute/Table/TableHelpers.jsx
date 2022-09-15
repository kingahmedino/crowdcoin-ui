import { createStyles, UnstyledButton, Group, Text } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  th: {
    padding: 0,
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  icon: {
    width: 16,
    height: 16,
    borderRadius: 21,
  },
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#2563EB",
    transition: "box-shadow 150ms ease",
    height: "45px",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function Th({ children }) {
  const classes = useStyles();

  return (
    <th className={classes.th}>
      <UnstyledButton className={classes.control}>
        <Group position="apart">
          <Text
            color="white"
            weight={500}
            size={12}
            style={{
              lineHeight: "13px",
            }}
          >
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </th>
  );
}
