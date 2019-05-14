import Modules from './modulesBuilder';
import {addFunctions} from '../features/Todo/Actions/addTodo';
import {deleteFunctions} from '../features/Todo/Actions/deleteTodo';

Modules.addModules([addFunctions, deleteFunctions]);

export default Modules;
