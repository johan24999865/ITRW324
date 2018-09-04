"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var locationSchema = new mongoose.Schema({
    name: String,
    Lat: Number,
    Long: Number,
    QRCode: { type: String, unique: true }
});
var LocationModel = mongoose.model('location', locationSchema);
exports.default = LocationModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXFVzZXJzXFxTTUFMTFZJTExFXFxEZXNrdG9wXFwzMjQgUHJvamVrXFxSZXBvXFxJVFJXMzI0XFx3ZWJzZXJ2aWNlXFxtb2RlbHNcXGxvY2F0aW9uLnRzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNNQUxMVklMTEVcXERlc2t0b3BcXDMyNCBQcm9qZWtcXFJlcG9cXElUUlczMjRcXHdlYnNlcnZpY2VcXG1vZGVsc1xcbG9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBcUM7QUFHckMsSUFBTSxjQUFjLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFDLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLE1BQU07SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUNwQyxDQUFDLENBQUM7QUFFSCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUUvRCxrQkFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCAqIGFzIGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuY29uc3QgbG9jYXRpb25TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuIG5hbWU6IFN0cmluZyxcclxuIExhdDogTnVtYmVyLFxyXG4gTG9uZzogTnVtYmVyLFxyXG4gUVJDb2RlOiB7dHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWV9XHJcbn0pO1xyXG5cclxubGV0IExvY2F0aW9uTW9kZWwgPSBtb25nb29zZS5tb2RlbCgnbG9jYXRpb24nLCBsb2NhdGlvblNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbk1vZGVsO1xyXG4iXX0=