/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2, $range = $opal.range;

  if ($scope.RUBY_ENGINE['$==']("opal")) {};
  self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
  (function($base, $super) {
    function $ChartBlockMacro(){};
    var self = $ChartBlockMacro = $klass($base, $super, 'ChartBlockMacro', $ChartBlockMacro);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$named("chart");

    self.$name_positional_attributes("type", "width", "height");

    return (def.$process = function(parent, target, attrs) {
      var $a, $b, self = this, data_path = nil, read_data = nil, engine = nil, raw_data = nil, html = nil;

      data_path = parent.$normalize_asset_path(target, "target");
      read_data = parent.$read_asset(data_path, $hash2(["warn_on_failure", "normalize"], {"warn_on_failure": true, "normalize": true}));
      if ((($a = ((($b = read_data['$nil?']()) !== false && $b !== nil) ? $b : read_data['$empty?']())) !== nil && (!$a._isBoolean || $a == true))) {
        return nil
        } else {
        engine = $scope.ChartBackend.$resolve_engine(attrs, parent.$document());
        raw_data = $scope.PlainRubyCSV.$parse(read_data);
        html = $scope.ChartBackend.$process(engine, attrs, raw_data);
        return self.$create_pass_block(parent, html, attrs, $hash2(["subs"], {"subs": nil}));
      };
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.BlockMacroProcessor);
  (function($base, $super) {
    function $ChartBlockProcessor(){};
    var self = $ChartBlockProcessor = $klass($base, $super, 'ChartBlockProcessor', $ChartBlockProcessor);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$named("chart");

    self.$on_context("literal");

    self.$name_positional_attributes("type", "width", "height");

    self.$parse_content_as("raw");

    return (def.$process = function(parent, reader, attrs) {
      var self = this, engine = nil, raw_data = nil, html = nil;

      engine = $scope.ChartBackend.$resolve_engine(attrs, parent.$document());
      raw_data = $scope.PlainRubyCSV.$parse(reader.$source());
      html = $scope.ChartBackend.$process(engine, attrs, raw_data);
      return self.$create_pass_block(parent, html, attrs, $hash2(["subs"], {"subs": nil}));
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.BlockProcessor);
  (function($base, $super) {
    function $ChartAssetsDocinfoProcessor(){};
    var self = $ChartAssetsDocinfoProcessor = $klass($base, $super, 'ChartAssetsDocinfoProcessor', $ChartAssetsDocinfoProcessor);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$at_location("header");

    $opal.cdecl($scope, 'C3JS_STYLESHEET', "<link rel=\"stylesheet\" href=\"http://cdnjs.cloudflare.com/ajax/libs/c3/0.3.0/c3.min.css\">");

    $opal.cdecl($scope, 'D3JS_SCRIPT', "<script src=\"http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js\" charset=\"utf-8\"></script>");

    $opal.cdecl($scope, 'C3JS_SCRIPT', "<script src=\"http://cdnjs.cloudflare.com/ajax/libs/c3/0.3.0/c3.min.js\"></script>");

    $opal.cdecl($scope, 'CHARTIST_STYLESHEET', "<link rel=\"stylesheet\" href=\"http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css\">");

    $opal.cdecl($scope, 'CHARTIST_SCRIPT', "<script src=\"http://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js\"></script>");

    $opal.cdecl($scope, 'CHARTJS_SCRIPT', "<script src=\"http://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js\"></script>");

    return (def.$process = function(doc) {
      var self = this;

      return "\n" + ($scope.C3JS_STYLESHEET) + "\n" + ($scope.D3JS_SCRIPT) + "\n" + ($scope.C3JS_SCRIPT) + "\n" + ($scope.CHARTIST_STYLESHEET) + "\n" + ($scope.CHARTIST_SCRIPT) + "\n" + ($scope.CHARTJS_SCRIPT);
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.DocinfoProcessor);
  (function($base, $super) {
    function $ChartBackend(){};
    var self = $ChartBackend = $klass($base, $super, 'ChartBackend', $ChartBackend);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$resolve_engine', function(attrs, document) {
      var $a, self = this;

      if ((($a = attrs['$key?']("engine")) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("engine").$downcase()
      } else if ((($a = document.$attributes()['$key?']("chart-engine")) !== nil && (!$a._isBoolean || $a == true))) {
        return document.$attributes()['$[]']("chart-engine").$downcase()
        } else {
        return "c3js"
      };
    });

    return ($opal.defs(self, '$process', function(engine, attrs, raw_data) {
      var $a, self = this, type = nil, $case = nil, data = nil, labels = nil;

      type = attrs['$[]']("type");
      return (function() {$case = engine;if ("c3js"['$===']($case)) {$a = $opal.to_ary($scope.C3jsChartBuilder.$prepare_data(raw_data)), data = ($a[0] == null ? nil : $a[0]), labels = ($a[1] == null ? nil : $a[1]);
      return ((function() {$case = type;if ("bar"['$===']($case)) {return $scope.C3jsChartBuilder.$bar(data, labels, attrs)}else if ("line"['$===']($case)) {return $scope.C3jsChartBuilder.$line(data, labels, attrs)}else if ("step"['$===']($case)) {return $scope.C3jsChartBuilder.$step(data, labels, attrs)}else if ("spline"['$===']($case)) {return $scope.C3jsChartBuilder.$spline(data, labels, attrs)}else {return $scope.C3jsChartBuilder.$line(data, labels, attrs)}})());}else if ("chartist"['$===']($case)) {$a = $opal.to_ary($scope.ChartistChartBuilder.$prepare_data(raw_data)), data = ($a[0] == null ? nil : $a[0]), labels = ($a[1] == null ? nil : $a[1]);
      return ((function() {$case = type;if ("bar"['$===']($case)) {return $scope.ChartistChartBuilder.$bar(data, labels, attrs)}else if ("line"['$===']($case)) {return $scope.ChartistChartBuilder.$line(data, labels, attrs)}else {return $scope.ChartistChartBuilder.$line(data, labels, attrs)}})());}else if ("chartjs"['$===']($case)) {$a = $opal.to_ary($scope.ChartjsChartBuilder.$prepare_data(raw_data)), data = ($a[0] == null ? nil : $a[0]), labels = ($a[1] == null ? nil : $a[1]);
      return ((function() {$case = type;if ("line"['$===']($case)) {return $scope.ChartjsChartBuilder.$line(data, labels, attrs)}else {return $scope.ChartjsChartBuilder.$line(data, labels, attrs)}})());}else { return nil }})();
    }), nil) && 'process';
  })(self, null);
  (function($base, $super) {
    function $C3jsChartBuilder(){};
    var self = $C3jsChartBuilder = $klass($base, $super, 'C3jsChartBuilder', $C3jsChartBuilder);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$bar', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_bar_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$line', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_line_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$step', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_step_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$spline', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_spline_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$create_chart_div', function(chart_id) {
      var self = this;

      return "<div id=\"" + (chart_id) + "\"></div>";
    });

    $opal.defs(self, '$get_chart_id', function() {
      var self = this;

      return "chart"['$+']($scope.PlainRubyRandom.$uuid());
    });

    $opal.defs(self, '$prepare_data', function(raw_data) {
      var $a, $b, TMP_1, self = this, labels = nil;

      labels = raw_data['$[]'](0);
      raw_data.$shift();
      ($a = ($b = raw_data.$map()).$with_index, $a._p = (TMP_1 = function(row, index){var self = TMP_1._s || this;
if (row == null) row = nil;if (index == null) index = nil;
      return row.$unshift("" + (index))}, TMP_1._s = self, TMP_1), $a).call($b);
      return [raw_data, labels];
    });

    $opal.defs(self, '$chart_bar_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nc3.generate({\n  bindto: '#" + (chart_id) + "',\n  size: { height: " + (chart_height) + ", width: " + (chart_width) + " },\n  data: {\n    columns: " + (data.$to_s()) + ",\n    type: 'bar'\n  },\n  axis: {\n    x: {\n      type: 'category',\n      categories: " + (labels.$to_s()) + "\n    }\n  }\n});\n</script>";
    });

    $opal.defs(self, '$chart_line_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nc3.generate({\n  bindto: '#" + (chart_id) + "',\n  size: { height: " + (chart_height) + ", width: " + (chart_width) + " },\n  data: {\n    columns: " + (data.$to_s()) + "\n  },\n  axis: {\n    x: {\n      type: 'category',\n      categories: " + (labels.$to_s()) + "\n    }\n  }\n});\n</script>";
    });

    $opal.defs(self, '$chart_step_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nc3.generate({\n  bindto: '#" + (chart_id) + "',\n  size: { height: " + (chart_height) + ", width: " + (chart_width) + " },\n  data: {\n    columns: " + (data.$to_s()) + ",\n    type: 'step'\n  },\n  axis: {\n    x: {\n      type: 'category',\n      categories: " + (labels.$to_s()) + "\n    }\n  }\n});\n</script>";
    });

    $opal.defs(self, '$chart_spline_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nc3.generate({\n  bindto: '#" + (chart_id) + "',\n  size: { height: " + (chart_height) + ", width: " + (chart_width) + " },\n  data: {\n    columns: " + (data.$to_s()) + ",\n    type: 'spline'\n  },\n  axis: {\n    x: {\n      type: 'category',\n      categories: " + (labels.$to_s()) + "\n    }\n  }\n});\n</script>";
    });

    $opal.defs(self, '$to_html', function(chart_div, chart_script) {
      var self = this;

      return "\n    " + (chart_div) + "\n    " + (chart_script) + "\n    ";
    });

    $opal.defs(self, '$get_chart_height', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("height"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("height")
        } else {
        return "400"
      };
    });

    return ($opal.defs(self, '$get_chart_width', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("width"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("width")
        } else {
        return "600"
      };
    }), nil) && 'get_chart_width';
  })(self, null);
  (function($base, $super) {
    function $ChartjsChartBuilder(){};
    var self = $ChartjsChartBuilder = $klass($base, $super, 'ChartjsChartBuilder', $ChartjsChartBuilder);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$line', function(data, labels, attrs) {
      var $a, $b, TMP_2, self = this, default_colors = nil, datasets = nil, chart_id = nil, chart_height = nil, chart_width = nil, chart_canvas = nil, chart_init_ctx_script = nil, chart_init_data_script = nil, chart_init_script = nil;

      default_colors = [$hash2(["r", "g", "b"], {"r": 220, "g": 220, "b": 220}), $hash2(["r", "g", "b"], {"r": 151, "g": 187, "b": 205})];
      datasets = ($a = ($b = data).$map, $a._p = (TMP_2 = function(set){var self = TMP_2._s || this, color = nil, color_rgba = nil;
if (set == null) set = nil;
      color = default_colors['$[]'](data.$index(set)['$%'](2));
        color_rgba = "rgba(" + (color['$[]']("r")) + "," + (color['$[]']("g")) + "," + (color['$[]']("b")) + ",1.0)";
        return "\n{\n  fillColor: \"" + (color_rgba.$gsub("1.0", "0.2")) + "\",\n  strokeColor: \"" + (color_rgba) + "\",\n  pointColor: \"" + (color_rgba) + "\",\n  pointHighlightStroke: \"" + (color_rgba) + "\",\n  pointStrokeColor: \"#fff\",\n  pointHighlightFill: \"#fff\",\n  data: " + (set.$to_s()) + "\n}\n      ";}, TMP_2._s = self, TMP_2), $a).call($b).$join(",");
      chart_id = "chart"['$+']($scope.PlainRubyRandom.$uuid());
      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      chart_canvas = "<div style=\"width:" + (chart_width) + "px; height:" + (chart_height) + "px\"><canvas id=\"" + (chart_id) + "\"></canvas></div>";
      chart_init_ctx_script = "var ctx = document.getElementById(\"" + (chart_id) + "\").getContext(\"2d\");";
      chart_init_data_script = "var data = {\n  labels: " + (labels.$to_s()) + ",\n  datasets: [\n    " + (datasets) + "\n  ]\n};";
      chart_init_script = "var chart = new Chart(ctx).Line(data, {responsive : true});";
      return "\n    " + (chart_canvas) + "<script type=\"text/javascript\">window.onload = function() {\n    " + (chart_init_ctx_script) + "\n    " + (chart_init_data_script) + "\n    " + (chart_init_script) + "\n}\n</script>";
    });

    $opal.defs(self, '$prepare_data', function(raw_data) {
      var self = this, labels = nil;

      labels = raw_data['$[]'](0);
      raw_data.$shift();
      return [raw_data, labels];
    });

    $opal.defs(self, '$get_chart_height', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("height"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("height")
        } else {
        return "400"
      };
    });

    return ($opal.defs(self, '$get_chart_width', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("width"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("width")
        } else {
        return "600"
      };
    }), nil) && 'get_chart_width';
  })(self, null);
  (function($base, $super) {
    function $ChartistChartBuilder(){};
    var self = $ChartistChartBuilder = $klass($base, $super, 'ChartistChartBuilder', $ChartistChartBuilder);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$bar', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_bar_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$line', function(data, labels, attrs) {
      var self = this, chart_id = nil, chart_div = nil, chart_generate_script = nil;

      chart_id = self.$get_chart_id();
      chart_div = self.$create_chart_div(chart_id);
      chart_generate_script = self.$chart_line_script(chart_id, data, labels, attrs);
      return self.$to_html(chart_div, chart_generate_script);
    });

    $opal.defs(self, '$create_chart_div', function(chart_id) {
      var self = this;

      return "<div id=\"" + (chart_id) + "\"class=\"ct-chart\"></div>";
    });

    $opal.defs(self, '$get_chart_id', function() {
      var self = this;

      return "chart"['$+']($scope.PlainRubyRandom.$uuid());
    });

    $opal.defs(self, '$prepare_data', function(raw_data) {
      var self = this, labels = nil;

      labels = raw_data['$[]'](0);
      raw_data.$shift();
      return [raw_data, labels];
    });

    $opal.defs(self, '$chart_bar_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nvar options = {\n  height: '" + (chart_height) + "',\n  colors:[\"#72B3CC\", \"#8EB33B\"]\n};\nvar data = {\n  labels: " + (labels.$to_s()) + ",\n  series: " + (data.$to_s()) + "\n};\nnew Chartist.Bar('#" + (chart_id) + "', data, options);\n</script>";
    });

    $opal.defs(self, '$chart_line_script', function(chart_id, data, labels, attrs) {
      var self = this, chart_height = nil, chart_width = nil;

      chart_height = self.$get_chart_height(attrs);
      chart_width = self.$get_chart_width(attrs);
      return "\n<script type=\"text/javascript\">\nvar options = {\n  height: '" + (chart_height) + "',\n  width: '" + (chart_width) + "',\n  colors:[\"#72B3CC\", \"#8EB33B\"]\n};\nvar data = {\n  labels: " + (labels.$to_s()) + ",\n  series: " + (data.$to_s()) + "\n};\nnew Chartist.Line('#" + (chart_id) + "', data, options);\n</script>";
    });

    $opal.defs(self, '$to_html', function(chart_div, chart_script) {
      var self = this;

      return "\n    " + (chart_div) + "\n    " + (chart_script) + "\n    ";
    });

    $opal.defs(self, '$get_chart_height', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("height"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("height")
        } else {
        return "400"
      };
    });

    return ($opal.defs(self, '$get_chart_width', function(attrs) {
      var $a, self = this;

      if ((($a = (attrs['$key?']("width"))) !== nil && (!$a._isBoolean || $a == true))) {
        return attrs['$[]']("width")
        } else {
        return "600"
      };
    }), nil) && 'get_chart_width';
  })(self, null);
  (function($base, $super) {
    function $PlainRubyCSV(){};
    var self = $PlainRubyCSV = $klass($base, $super, 'PlainRubyCSV', $PlainRubyCSV);

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$parse', function(data) {
      var $a, $b, TMP_3, self = this, result = nil;

      result = [];
      ($a = ($b = data).$each_line, $a._p = (TMP_3 = function(line){var self = TMP_3._s || this, line_chomp = nil;
if (line == null) line = nil;
      line_chomp = line.$chomp();
        return result.$push(line_chomp.$split(","));}, TMP_3._s = self, TMP_3), $a).call($b);
      return result;
    });

    return ($opal.defs(self, '$read', function(filename) {
      var $a, $b, TMP_4, self = this, result = nil;

      result = [];
      ($a = ($b = $scope.File.$open(filename)).$each, $a._p = (TMP_4 = function(line){var self = TMP_4._s || this, line_chomp = nil;
if (line == null) line = nil;
      line_chomp = line.$chomp();
        return result.$push(line_chomp.$split(","));}, TMP_4._s = self, TMP_4), $a).call($b);
      return result;
    }), nil) && 'read';
  })(self, null);
  return (function($base, $super) {
    function $PlainRubyRandom(){};
    var self = $PlainRubyRandom = $klass($base, $super, 'PlainRubyRandom', $PlainRubyRandom);

    var def = self._proto, $scope = self._scope;

    return ($opal.defs(self, '$uuid', function() {
      var $a, $b, TMP_5, self = this;

      return ($a = ($b = ($range(0, 8, true))).$map, $a._p = (TMP_5 = function(){var self = TMP_5._s || this;

      return ((65)['$+'](self.$rand(26))).$chr()}, TMP_5._s = self, TMP_5), $a).call($b).$join();
    }), nil) && 'uuid'
  })(self, null);
})(Opal);
/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

  if ($scope.RUBY_ENGINE['$==']("opal")) {
    };
  return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function(){var self = TMP_1._s || this, $a;

  if ((($a = self.$document()['$basebackend?']("html")) !== nil && (!$a._isBoolean || $a == true))) {
      self.$block_macro($scope.ChartBlockMacro);
      self.$block($scope.ChartBlockProcessor);
      return self.$docinfo_processor($scope.ChartAssetsDocinfoProcessor);
      } else {
      return nil
    }}, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);
