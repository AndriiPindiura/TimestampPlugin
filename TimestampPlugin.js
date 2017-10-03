function TimestampPlugin(options) {}

TimestampPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compile', function(params) {
    console.time('Compile');
  });

  compiler.plugin('done', function(params) {
    setTimeout(() => {
      console.log('\x1b[33m');
      console.timeEnd('Compile')
      console.log('webpack: Compiled successfully at', (new Date()).toLocaleTimeString(), '\x1b[0m')
    }, 100)
  });

};

module.exports = TimestampPlugin;