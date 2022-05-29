import mongoose from 'mongoose';
import { TenantSchema } from './interface';
import { TenantTier } from './enum';

const TenantSchema = new mongoose.Schema<TenantSchema>(
    {
        slug: {
            type: String,
            required: true
        },
        tier: {
            type: String,
            refs: TenantTier, 
            default: TenantTier.free
        }
    }
)

const Tenant = mongoose.model('Car', TenantSchema);
export default Tenant;