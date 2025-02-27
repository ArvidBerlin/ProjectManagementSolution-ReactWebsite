import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RoleProvider } from './contexts/RoleContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { EmployeeProvider } from './contexts/EmployeeContext.jsx'
import { PostalCodeProvider } from './contexts/PostalCodeContext.jsx'
import { CustomerAddressProvider } from './contexts/CustomerAddressContext.jsx'
import { CustomerContactProvider } from './contexts/CustomerContactContext.jsx'
import { CustomerProvider } from './contexts/CustomerContext.jsx'
import { InvoiceProvider } from './contexts/InvoiceContext.jsx'
import { ServiceProvider } from './contexts/ServiceContext.jsx'
import { StatusProvider } from './contexts/StatusContext.jsx'
import { ProjectTypeProvider } from './contexts/ProjectTypeContext.jsx'
import { ProjectManagerProvider } from './contexts/ProjectManagerContext.jsx'
import { ProjectProvider } from './contexts/ProjectContext.jsx'
import { TaskProvider } from './contexts/TaskContext.jsx'
import { TaskAssignmentProvider } from './contexts/TaskAssignmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoleProvider> 
      <UserProvider> 
        <EmployeeProvider> 
          <PostalCodeProvider> 
            <CustomerAddressProvider> 
              <CustomerContactProvider> 
                <CustomerProvider> 
                  <InvoiceProvider> 
                    <ServiceProvider> 
                      <StatusProvider> 
                        <ProjectTypeProvider> 
                          <ProjectManagerProvider> 
                            <ProjectProvider> 
                              <TaskProvider> 
                                <TaskAssignmentProvider> 
                                  <App />
                                </TaskAssignmentProvider>
                              </TaskProvider>
                            </ProjectProvider>
                          </ProjectManagerProvider>
                        </ProjectTypeProvider>
                      </StatusProvider>
                    </ServiceProvider>
                  </InvoiceProvider>
                </CustomerProvider>
              </CustomerContactProvider>
            </CustomerAddressProvider>
          </PostalCodeProvider>
        </EmployeeProvider>
      </UserProvider>
    </RoleProvider>
  </BrowserRouter>,
)
