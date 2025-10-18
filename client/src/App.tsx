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
        <Route path="/dashboard">
          <DashboardLayout>
            <Switch>
              <Route path="/dashboard/upload" component={Upload} />
              <Route path="/dashboard/analysis" component={Analysis} />
              <Route path="/dashboard/database" component={Database} />
              <Route path="/dashboard/reports" component={Reports} />
              <Route path="/dashboard/account" component={Account} />
              <Route path="/dashboard/subscription" component={Subscription} />
              <Route path="/dashboard/admin" component={Admin} />
              <Route component={Upload} />
            </Switch>
          </DashboardLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
