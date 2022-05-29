import Tenant from "tenant/model/Tenant";
import MongoConnection from "../../mongo/connection";

class GetTenantController {
  getHomeTenant = async (slug: string): Promise<any> => {
    try {
      await MongoConnection.enableConnnection();
      const tenant = await Tenant.findOne({ slug }, "slug tier").exec();

      return tenant;
    } catch (err) {
      console.warn(err);
    }
  }
}

export default GetTenantController;
