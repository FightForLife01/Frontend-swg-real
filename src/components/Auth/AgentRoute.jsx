import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function AgentRoute() {
  const { user } = useAuth();

  return user?.role === 'agent' ? <Outlet /> : <Navigate to="/dashboard" replace />;
}
