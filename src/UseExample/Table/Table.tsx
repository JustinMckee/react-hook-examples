import { use } from 'react';

type Users = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

// Due to hot reloading - move promise outside component so it's created only once
const usersPromise: Promise<Users[]> = fetch(
	'https://jsonplaceholder.typicode.com/users',
)
	.then((res) => {
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return res.json();
	})
	.then((data) => {
		// Simulate slow network with 4 second delay
		return new Promise<Users[]>((resolve) =>
			setTimeout(() => resolve(data), 4000),
		);
	});

export const Table = () => {
	const users: Users[] = use(usersPromise);
	return (
		<table>
			<thead>
				<td>Name</td>
				<td>Username</td>
				<td>Email</td>
				<td>City</td>
				<td>Phone</td>
				<td>Website</td>
				<td>Company</td>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.address.city}</td>
						<td>{user.phone}</td>
						<td>{user.website}</td>
						<td>{user.company.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
