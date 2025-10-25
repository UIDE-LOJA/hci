/**
 * Moore's Law D3.js Chart
 * Universidad Internacional del Ecuador
 * Curso: PP-07-HCI - Semana 1
 * 
 * Interactive visualization of Moore's Law showing the exponential growth
 * of transistors in processors from 1971 to 2025
 */

// Data for Moore's Law chart with key processors
const mooresLawData = [
    { year: 1971, transistors: 2300, processor: "Intel 4004" },
    { year: 1972, transistors: 3500, processor: "Intel 8008" },
    { year: 1974, transistors: 6000, processor: "Intel 8080" },
    { year: 1978, transistors: 29000, processor: "Intel 8086" },
    { year: 1982, transistors: 134000, processor: "Intel 80286" },
    { year: 1985, transistors: 275000, processor: "Intel 80386" },
    { year: 1989, transistors: 1200000, processor: "Intel 80486" },
    { year: 1993, transistors: 3100000, processor: "Pentium" },
    { year: 1997, transistors: 7500000, processor: "Pentium II" },
    { year: 1999, transistors: 9500000, processor: "Pentium III" },
    { year: 2000, transistors: 42000000, processor: "Pentium 4" },
    { year: 2006, transistors: 291000000, processor: "Core 2 Duo" },
    { year: 2008, transistors: 731000000, processor: "Core i7" },
    { year: 2012, transistors: 1400000000, processor: "Core i7 Ivy Bridge" },
    { year: 2014, transistors: 2600000000, processor: "Core i7 Haswell" },
    { year: 2017, transistors: 19200000000, processor: "Core i9" },
    { year: 2020, transistors: 11800000000, processor: "Apple M1" },
    { year: 2022, transistors: 80000000000, processor: "NVIDIA H100" },
    { year: 2024, transistors: 134000000000, processor: "Apple M4 Max" }
];

// Moore's Law prediction line
const mooresLawPrediction = [];
for (let year = 1971; year <= 2025; year++) {
    const yearsFromStart = year - 1971;
    const doublings = yearsFromStart / 2; // Every 2 years
    const predictedTransistors = 2300 * Math.pow(2, doublings);
    mooresLawPrediction.push({ year, transistors: predictedTransistors });
}

/**
 * Create Moore's Law interactive D3.js chart
 */
function createMooresLawChart() {
    const container = d3.select("#moores-law-chart");
    if (container.empty()) return;

    // Clear any existing content completely
    container.selectAll("*").remove();
    
    // Remove any existing tooltips
    d3.selectAll(".tooltip").remove();

    // Set dimensions and margins
    const margin = { top: 40, right: 120, bottom: 60, left: 100 };
    const width = 860 - margin.left - margin.right;
    const height = 460 - margin.top - margin.bottom;

    // Create SVG
    const svg = container
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleLinear()
        .domain([1970, 2025])
        .range([0, width]);

    const yScale = d3.scaleLog()
        .domain([1000, 200000000000])
        .range([height, 0]);

    // Line generators
    const line = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.transistors))
        .curve(d3.curveMonotoneX);

    // Add grid lines (only grid, no labels)
    g.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat("")
        )
        .selectAll("line")
        .style("stroke", "#e0e0e0")
        .style("stroke-width", 0.5);

    g.append("g")
        .attr("class", "grid")
        .call(d3.axisLeft(yScale)
            .tickValues([1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000])
            .tickSize(-width)
            .tickFormat("")
        )
        .selectAll("line")
        .style("stroke", "#e0e0e0")
        .style("stroke-width", 0.5);

    // Add Moore's Law prediction line
    g.append("path")
        .datum(mooresLawPrediction)
        .attr("fill", "none")
        .attr("stroke", "#ff6b6b")
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "5,5")
        .attr("d", line)
        .style("opacity", 0.8);

    // Add actual data line
    g.append("path")
        .datum(mooresLawData)
        .attr("fill", "none")
        .attr("stroke", "#4ecdc4")
        .attr("stroke-width", 3)
        .attr("d", line);

    // Add data points
    const circles = g.selectAll(".data-point")
        .data(mooresLawData)
        .enter().append("circle")
        .attr("class", "data-point")
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.transistors))
        .attr("r", 5)
        .attr("fill", "#2c3e50")
        .attr("stroke", "#4ecdc4")
        .attr("stroke-width", 2)
        .style("cursor", "pointer");

    // Add tooltips (ensure unique)
    let tooltip = d3.select("body").select(".moores-tooltip");
    if (tooltip.empty()) {
        tooltip = d3.select("body").append("div")
            .attr("class", "tooltip moores-tooltip")
            .style("position", "absolute")
            .style("background", "rgba(0,0,0,0.9)")
            .style("color", "white")
            .style("padding", "12px")
            .style("border-radius", "8px")
            .style("font-size", "13px")
            .style("pointer-events", "none")
            .style("opacity", 0)
            .style("z-index", "1000")
            .style("box-shadow", "0 4px 12px rgba(0,0,0,0.3)");
    }

    circles
        .on("mouseover", function(event, d) {
            d3.select(this).attr("r", 8);
            tooltip.transition().duration(200).style("opacity", 1);
            tooltip.html(`
                <strong>${d.processor}</strong><br/>
                Año: ${d.year}<br/>
                Transistores: ${d3.format(",")(d.transistors)}
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function(d) {
            d3.select(this).attr("r", 5);
            tooltip.transition().duration(200).style("opacity", 0);
        });

    // Add axes
    g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .tickValues([1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025])
            .tickFormat(d3.format("d")))
        .selectAll("text")
        .style("font-size", "12px")
        .style("font-weight", "500")
        .style("fill", "#2c3e50");

    g.append("g")
        .call(d3.axisLeft(yScale)
            .tickValues([1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000])
            .tickFormat(d => {
                if (d >= 1000000000000) return (d / 1000000000000).toFixed(0) + "T";
                if (d >= 1000000000) return (d / 1000000000).toFixed(0) + "B";
                if (d >= 1000000) return (d / 1000000).toFixed(0) + "M";
                if (d >= 1000) return (d / 1000).toFixed(0) + "K";
                return d3.format(",")(d);
            })
            .tickPadding(10))
        .selectAll("text")
        .style("font-size", "12px")
        .style("font-weight", "500")
        .style("fill", "#2c3e50");

    // Add axis labels
    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 20)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#2c3e50")
        .text("Número de Transistores (Escala Log)");

    g.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Año");

    // Add title
    g.append("text")
        .attr("x", width / 2)
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("Ley de Moore: Evolución de Transistores en Procesadores");

    // Add legend
    const legend = g.append("g")
        .attr("transform", `translate(${width - 100}, 20)`);

    legend.append("line")
        .attr("x1", 0)
        .attr("x2", 20)
        .attr("y1", 0)
        .attr("y2", 0)
        .attr("stroke", "#4ecdc4")
        .attr("stroke-width", 3);

    legend.append("text")
        .attr("x", 25)
        .attr("y", 0)
        .attr("dy", "0.35em")
        .style("font-size", "12px")
        .text("Datos Reales");

    legend.append("line")
        .attr("x1", 0)
        .attr("x2", 20)
        .attr("y1", 20)
        .attr("y2", 20)
        .attr("stroke", "#ff6b6b")
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "5,5");

    legend.append("text")
        .attr("x", 25)
        .attr("y", 20)
        .attr("dy", "0.35em")
        .style("font-size", "12px")
        .text("Predicción de Moore");
}

// Track if chart has been created to avoid duplicates
let chartCreated = false;

/**
 * Event listeners for Moore's Law chart initialization
 */
// Initialize chart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Reveal.js to initialize
    setTimeout(() => {
        if (!chartCreated) {
            createMooresLawChart();
            chartCreated = true;
        }
    }, 1000);
});

// Also create chart when slide becomes visible (for Reveal.js)
if (typeof Reveal !== 'undefined') {
    Reveal.on('slidechanged', function(event) {
        if (event.currentSlide.querySelector('#moores-law-chart') && !chartCreated) {
            setTimeout(() => {
                createMooresLawChart();
                chartCreated = true;
            }, 100);
        }
    });
}