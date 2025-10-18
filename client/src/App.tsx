import { Route, Switch } from 'wouter';
import { Toaster } from '@/components/ui/toaster';
import Landing from '@/pages/landing';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Subscribe from '@/pages/subscribe';
import NotFound from '@/pages/not-found';
import DashboardLayout from '@/pages/dashboard-layout';
import Upload from '@/pages/dashboard/upload';
import Analysis from '@/pages/dashboard/analysis';
import Database from '@/pages/dashboard/database';
import Reports from '@/pages/dashboard/reports';
import Account from '@/pages/dashboard/account';
import Subscription from '@/pages/dashboard/subscription';
import Admin from '@/pages/dashboard/admin';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/dashboard/upload">
          <DashboardLayout>
            <Upload />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/analysis">
          <DashboardLayout>
            <Analysis />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/database">
          <DashboardLayout>
            <Database />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/reports">
          <DashboardLayout>
            <Reports />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/account">
          <DashboardLayout>
            <Account />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/subscription">
          <DashboardLayout>
            <Subscription />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard/admin">
          <DashboardLayout>
            <Admin />
          </DashboardLayout>
        </Route>
        <Route path="/dashboard">
          <DashboardLayout>
            <Upload />
          </DashboardLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
