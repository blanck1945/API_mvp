import Tenant from "tenant/model/Tenant"


class PostTenantController {
    async create(newTenant) {
        try {
            const tenant = await Tenant.create(newTenant)

            return tenant.id
        }
        catch(err) {
            console.warn(err)
        }
    }
}

export default PostTenantController

