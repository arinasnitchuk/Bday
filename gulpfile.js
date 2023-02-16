//основной модуль
import gulp from "gulp";

//импорт путей
import { path } from "./gulp/config/path.js";

global.app = {
    path,
    gulp,

}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";

//наблюдает за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files, copy)
}

//построение сценариев выполнения задач
const dev = gulp.series(copy, watcher);

//Выполнение сценария по умолчанию
gulp.task("default", dev);