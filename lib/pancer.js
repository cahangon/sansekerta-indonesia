/** ++++++++++++++++++++
 *  Application Server
 *  ++++++++++++++++++++
 *
 *
 The MIT License (MIT)

 Copyright (c) 2014 Cah Angon

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */
var express = require('express'),
    server = express(),
    api = require('./routes/api'),
    routes = require('./routes'),
    config = require('./config');

server.configure('development',function(){
    server.use(express.errorHandler());
});

// Routes
server.get('/', routes.home);

/**
 * Inisialisasi dari Search Index
 */
server.get('/api/search-engine/init', routes.initSearchIndex);

/**++++++++++++
 *  API
 * ++++++++++++
 */

server.get('/api', api.version);

server.get('/api/search/:kata', api.search);

server.listen(config.get('server:port'), function () {
    console.log('Server berjalan pada port: ' + config.get('server:port'));
});
