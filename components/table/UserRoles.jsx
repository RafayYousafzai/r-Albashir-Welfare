import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Select,
  Container,
} from "@mantine/core";

const rolesData = ["Contributor", "Administrator"];

export default function UsersRolesTable({ users, handleRole }) {
  const rows =
    users &&
    users.map((user) => (
      <Table.Tr key={user.email}>
        <Table.Td>
          <Group gap="sm">
            <Avatar
              size={40}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius={40}
            />
            <div>
              <Text fz="sm" fw={500}>
                {user.fullName}
              </Text>
              <Text fz="xs" c="dimmed">
                {user.email}
              </Text>
            </div>
          </Group>
        </Table.Td>

        <Table.Td>
          <Select
            data={rolesData}
            defaultValue={user.role}
            variant="unstyled"
            allowDeselect={false}
            onChange={(selectedRole) => handleChange(selectedRole, user.email)}
          />
        </Table.Td>
        <Table.Td>{user.bio}</Table.Td>
      </Table.Tr>
    ));

  const handleChange = (selectedRole, userEmail) => {
    handleRole(selectedRole, userEmail);
  };

  return (
    <Container size="lg">
      <Table.ScrollContainer minWidth={800} mt={100}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Users</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Bio</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
}
