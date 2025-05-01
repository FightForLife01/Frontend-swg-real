import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function ProRoute() {
  const { user } = useAuth();

  return user?.subscriptionPlan === 'pro' && user?.subscriptionStatus === 'active' 
    ? <Outlet /> 
    : <Navigate to="/abonamente" replace />;
}
