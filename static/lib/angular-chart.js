!function () {
    "use strict";
    function t(t) {
        return{restrict: "CA", scope: {data: "=", labels: "=", options: "=", series: "=", colours: "=", chartType: "=", legend: "@", click: "="}, link: function (e, n) {
            function a(o) {
                if (o && o.length) {
                    var l = t || e.chartType;
                    l && (g && g.destroy(), g = r(l, e, n))
                }
            }

            var g, f = document.createElement("div");
            f.className = "chart-container", n.replaceWith(f), f.appendChild(n[0]), "object" == typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && "function" == typeof G_vmlCanvasManager.initElement && G_vmlCanvasManager.initElement(n[0]), e.$watch("data", function (a, f) {
                if (a && a.length && (!i(t) || a[0].length)) {
                    var c = t || e.chartType;
                    if (c) {
                        if (g) {
                            if (o(c, a, f))return l(g, c, a, e);
                            g.destroy()
                        }
                        g = r(c, e, n)
                    }
                }
            }, !0), e.$watch("series", a, !0), e.$watch("labels", a, !0), e.$watch("chartType", function (t) {
                t && (g && g.destroy(), g = r(t, e, n))
            })
        }}
    }

    function o(t, o, r) {
        return o && r && o.length && r.length ? i(t) ? o.length === r.length && o[0].length === r[0].length : o.length === r.length : !1
    }

    function r(t, o, r) {
        var l = r[0], n = l.getContext("2d"), g = i(t) ? a(o.labels, o.data, o.series || [], o.colours) : f(o.labels, o.data, o.colours), c = new Chart(n)[t](g, o.options || {});
        return o.click && (l.onclick = function (r) {
            if (c.getPointsAtEvent || c.getSegmentsAtEvent) {
                var e = i(t) ? c.getPointsAtEvent(r) : c.getSegmentsAtEvent(r);
                o.click(e, r)
            }
        }), o.legend && "false" !== o.legend && e(r, c), c
    }

    function e(t, o) {
        var r = t.parent(), e = r.find("chart-legend"), l = "<chart-legend>" + o.generateLegend() + "</chart-legend>";
        e.length ? e.replaceWith(l) : r.append(l)
    }

    function l(t, o, r, e) {
        i(o) ? t.datasets.forEach(function (t, o) {
            e.colours && n(t, e.colours[o]), (t.points || t.bars).forEach(function (t, e) {
                t.value = r[o][e]
            })
        }) : t.segments.forEach(function (t, o) {
            t.value = r[o], e.colours && n(t, e.colours[o])
        }), t.update()
    }

    function n(t, o) {
        t.fillColor = o.fillColor, t.highlightColor = o.highlightColor, t.strokeColor = o.strokeColor, t.pointColor = o.pointColor, t.pointStrokeColor = o.pointStrokeColor
    }

    function i(t) {
        return["Line", "Bar", "Radar"].indexOf(t) > -1
    }

    function a(t, o, r, e) {
        return e = e || Chart.defaults.global.colours, {labels: t, datasets: o.map(function (t, o) {
            var l = g(e[o]);
            return l.label = r[o], l.data = t, l
        })}
    }

    function g(t) {
        var o = {};
        for (var r in t)t.hasOwnProperty(r) && (o[r] = t[r]);
        return o
    }

    function f(t, o, r) {
        return r = r || Chart.defaults.global.colours, t.map(function (t, e) {
            return{label: t, value: o[e], color: r[e].strokeColor, highlight: r[e].pointHighlightStroke}
        })
    }

    Chart.defaults.global.responsive = !0, Chart.defaults.global.multiTooltipTemplate = "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>", Chart.defaults.global.colours = [
        {fillColor: "rgba(151,187,205,0.2)", strokeColor: "rgba(151,187,205,1)", pointColor: "rgba(151,187,205,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(151,187,205,0.8)"},
        {fillColor: "rgba(220,220,220,0.2)", strokeColor: "rgba(220,220,220,1)", pointColor: "rgba(220,220,220,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(220,220,220,0.8)"},
        {fillColor: "rgba(247,70,74,0.2)", strokeColor: "rgba(247,70,74,1)", pointColor: "rgba(247,70,74,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(247,70,74,0.8)"},
        {fillColor: "rgba(70,191,189,0.2)", strokeColor: "rgba(70,191,189,1)", pointColor: "rgba(70,191,189,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(70,191,189,0.8)"},
        {fillColor: "rgba(253,180,92,0.2)", strokeColor: "rgba(253,180,92,1)", pointColor: "rgba(253,180,92,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(253,180,92,0.8)"},
        {fillColor: "rgba(148,159,177,0.2)", strokeColor: "rgba(148,159,177,1)", pointColor: "rgba(148,159,177,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(148,159,177,0.8)"},
        {fillColor: "rgba(77,83,96,0.2)", strokeColor: "rgba(77,83,96,1)", pointColor: "rgba(77,83,96,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(77,83,96,1)"}
    ], angular.module("chart.js", []).directive("chartBase", function () {
        return t()
    }).directive("chartLine", function () {
        return t("Line")
    }).directive("chartBar", function () {
        return t("Bar")
    }).directive("chartRadar", function () {
        return t("Radar")
    }).directive("chartDoughnut", function () {
        return t("Doughnut")
    }).directive("chartPie", function () {
        return t("Pie")
    }).directive("chartPolarArea", function () {
        return t("PolarArea")
    })
}();
//# sourceMappingURL=angular-chart.js.map