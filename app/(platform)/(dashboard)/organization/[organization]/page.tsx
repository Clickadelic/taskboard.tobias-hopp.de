import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationPage = () => {
	const { userId, orgId } = auth()

	return (
		<div>
			<OrganizationSwitcher />
		</div>
	)
}

export default OrganizationPage
