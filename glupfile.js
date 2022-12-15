exports.default = series(scssTask, jsTask, browserSyncServer, watchTash);

exports.build = series(scssTask, jsTask);