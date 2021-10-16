import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import TasksCompleted from '../components/tasksCompleted/TasksCompleted';
import TasksDeleted from '../components/tasksDeleted/TasksDeleted';
import Home from '../pages/Home';


const Routes = () => {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/tareas-realizadas' exact component={TasksCompleted} />
                <Route path='/tareas-retiradas' exact component={TasksDeleted} />
            </Switch>
        </Router>
    )
}

export default Routes;
