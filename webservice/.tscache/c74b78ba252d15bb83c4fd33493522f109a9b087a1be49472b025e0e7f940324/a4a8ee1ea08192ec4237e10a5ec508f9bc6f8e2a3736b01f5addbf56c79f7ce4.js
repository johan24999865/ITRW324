"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var searchAreaSchema = new mongoose.Schema({
    name: String,
    identifier: { type: String, unique: true },
    JSONObject: JSON
});
var SearchArea = mongoose.model('search-area', searchAreaSchema);
exports.default = SearchArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXFVzZXJzXFxTTUFMTFZJTExFXFxEZXNrdG9wXFwzMjQgUHJvamVrXFxSZXBvXFxJVFJXMzI0XFx3ZWJzZXJ2aWNlXFxtb2RlbHNcXHNlYXJjaEFyZWEudHMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU01BTExWSUxMRVxcRGVza3RvcFxcMzI0IFByb2pla1xcUmVwb1xcSVRSVzMyNFxcd2Vic2VydmljZVxcbW9kZWxzXFxzZWFyY2hBcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQXFDO0FBR3JDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQ3hDLFVBQVUsRUFBRSxJQUFJO0NBQ2hCLENBQUMsQ0FBQztBQUVILElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFbkUsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNlYXJjaEFyZWFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuIG5hbWU6IFN0cmluZyxcclxuIGlkZW50aWZpZXI6IHt0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZX0sXHJcbiBKU09OT2JqZWN0OiBKU09OXHJcbn0pO1xyXG5cclxuY29uc3QgU2VhcmNoQXJlYSA9IG1vbmdvb3NlLm1vZGVsKCdzZWFyY2gtYXJlYScsIHNlYXJjaEFyZWFTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQXJlYTtcclxuIl19