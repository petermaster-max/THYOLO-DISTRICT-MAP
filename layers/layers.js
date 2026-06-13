ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([34.648515, -16.418903, 35.862620, -15.837986]);
var wms_layers = [];

var format_mapofthyolo_0 = new ol.format.GeoJSON();
var features_mapofthyolo_0 = format_mapofthyolo_0.readFeatures(json_mapofthyolo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mapofthyolo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapofthyolo_0.addFeatures(features_mapofthyolo_0);
var lyr_mapofthyolo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapofthyolo_0, 
                style: style_mapofthyolo_0,
                popuplayertitle: 'map of thyolo',
                interactive: true,
                title: '<img src="styles/legend/mapofthyolo_0.png" /> map of thyolo'
            });
var format_boundaryofconstitucy_1 = new ol.format.GeoJSON();
var features_boundaryofconstitucy_1 = format_boundaryofconstitucy_1.readFeatures(json_boundaryofconstitucy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_boundaryofconstitucy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundaryofconstitucy_1.addFeatures(features_boundaryofconstitucy_1);
var lyr_boundaryofconstitucy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundaryofconstitucy_1, 
                style: style_boundaryofconstitucy_1,
                popuplayertitle: 'boundary of constitucy',
                interactive: true,
                title: '<img src="styles/legend/boundaryofconstitucy_1.png" /> boundary of constitucy'
            });
var format_Healthfacilities_2 = new ol.format.GeoJSON();
var features_Healthfacilities_2 = format_Healthfacilities_2.readFeatures(json_Healthfacilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthfacilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilities_2.addFeatures(features_Healthfacilities_2);
var lyr_Healthfacilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilities_2, 
                style: style_Healthfacilities_2,
                popuplayertitle: 'Health facilities',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilities_2.png" /> Health facilities'
            });
var format_schools_3 = new ol.format.GeoJSON();
var features_schools_3 = format_schools_3.readFeatures(json_schools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_schools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_3.addFeatures(features_schools_3);
var lyr_schools_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schools_3, 
                style: style_schools_3,
                popuplayertitle: 'schools',
                interactive: true,
                title: '<img src="styles/legend/schools_3.png" /> schools'
            });
var format_rivers_4 = new ol.format.GeoJSON();
var features_rivers_4 = format_rivers_4.readFeatures(json_rivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_4.addFeatures(features_rivers_4);
var lyr_rivers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rivers_4, 
                style: style_rivers_4,
                popuplayertitle: 'rivers',
                interactive: true,
                title: '<img src="styles/legend/rivers_4.png" /> rivers'
            });
var format_mainroads_5 = new ol.format.GeoJSON();
var features_mainroads_5 = format_mainroads_5.readFeatures(json_mainroads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_mainroads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainroads_5.addFeatures(features_mainroads_5);
var lyr_mainroads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainroads_5, 
                style: style_mainroads_5,
                popuplayertitle: 'main roads',
                interactive: true,
                title: '<img src="styles/legend/mainroads_5.png" /> main roads'
            });

lyr_mapofthyolo_0.setVisible(true);lyr_boundaryofconstitucy_1.setVisible(true);lyr_Healthfacilities_2.setVisible(true);lyr_schools_3.setVisible(true);lyr_rivers_4.setVisible(true);lyr_mainroads_5.setVisible(true);
var layersList = [lyr_mapofthyolo_0,lyr_boundaryofconstitucy_1,lyr_Healthfacilities_2,lyr_schools_3,lyr_rivers_4,lyr_mainroads_5];
lyr_mapofthyolo_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Region': 'Region', });
lyr_boundaryofconstitucy_1.set('fieldAliases', {'POLYID': 'POLYID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LOCATORNOD': 'LOCATORNOD', 'NUMERICUSE': 'NUMERICUSE', 'TEXTUSERID': 'TEXTUSERID', });
lyr_Healthfacilities_2.set('fieldAliases', {'FCODE': 'FCODE', 'FAC_NAME': 'FAC_NAME', 'DISTRICT': 'DISTRICT', 'FACILITY': 'FACILITY', 'PHONE': 'PHONE', 'BOX_NO': 'BOX_NO', 'FAX': 'FAX', 'DIST_DHO': 'DIST_DHO', 'TIME': 'TIME', 'X': 'X', 'Y': 'Y', 'CO_ORDINAT': 'CO_ORDINAT', 'NEAR_FAC': 'NEAR_FAC', 'DATE_APPR': 'DATE_APPR', 'ROAD': 'ROAD', 'NO_BED': 'NO_BED', 'OCCUP_RATE': 'OCCUP_RATE', 'DAT_CONSTR': 'DAT_CONSTR', 'FUNDEDBY': 'FUNDEDBY', 'OWNER': 'OWNER', 'POPULATION': 'POPULATION', 'NO_OP': 'NO_OP', 'NO_BIRTH_': 'NO_BIRTH_', 'PLAN_DHO': 'PLAN_DHO', 'PLAN_MOW': 'PLAN_MOW', 'DONATION': 'DONATION', 'PERC_DONA': 'PERC_DONA', 'BUDG_APPRO': 'BUDG_APPRO', 'BUDG_ACT': 'BUDG_ACT', 'COST_ACT': 'COST_ACT', 'DIFFER_BY': 'DIFFER_BY', 'REVENUE': 'REVENUE', });
lyr_schools_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'District': 'District', 'EMIS_Numbe': 'EMIS_Numbe', 'School_Nam': 'School_Nam', 'X_Coordina': 'X_Coordina', 'Y_Coordina': 'Y_Coordina', 'male_stude': 'male_stude', 'female_stu': 'female_stu', 'Type': 'Type', 'Long': 'Long', 'Lat': 'Lat', 'No_of_Teac': 'No_of_Teac', });
lyr_rivers_4.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_mainroads_5.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_mapofthyolo_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'Region': 'TextEdit', });
lyr_boundaryofconstitucy_1.set('fieldImages', {'POLYID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'LOCATORNOD': 'TextEdit', 'NUMERICUSE': 'TextEdit', 'TEXTUSERID': 'TextEdit', });
lyr_Healthfacilities_2.set('fieldImages', {'FCODE': 'TextEdit', 'FAC_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'FACILITY': 'TextEdit', 'PHONE': 'TextEdit', 'BOX_NO': 'TextEdit', 'FAX': 'TextEdit', 'DIST_DHO': 'TextEdit', 'TIME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CO_ORDINAT': 'TextEdit', 'NEAR_FAC': 'TextEdit', 'DATE_APPR': 'DateTime', 'ROAD': 'TextEdit', 'NO_BED': 'Range', 'OCCUP_RATE': 'TextEdit', 'DAT_CONSTR': 'TextEdit', 'FUNDEDBY': 'TextEdit', 'OWNER': 'TextEdit', 'POPULATION': 'TextEdit', 'NO_OP': 'Range', 'NO_BIRTH_': 'TextEdit', 'PLAN_DHO': 'TextEdit', 'PLAN_MOW': 'TextEdit', 'DONATION': 'TextEdit', 'PERC_DONA': 'TextEdit', 'BUDG_APPRO': 'TextEdit', 'BUDG_ACT': 'TextEdit', 'COST_ACT': 'TextEdit', 'DIFFER_BY': 'TextEdit', 'REVENUE': 'TextEdit', });
lyr_schools_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'District': 'TextEdit', 'EMIS_Numbe': 'TextEdit', 'School_Nam': 'TextEdit', 'X_Coordina': 'TextEdit', 'Y_Coordina': 'TextEdit', 'male_stude': 'TextEdit', 'female_stu': 'TextEdit', 'Type': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'No_of_Teac': 'TextEdit', });
lyr_rivers_4.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_mainroads_5.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_mapofthyolo_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Region': 'no label', });
lyr_boundaryofconstitucy_1.set('fieldLabels', {'POLYID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'LOCATORNOD': 'no label', 'NUMERICUSE': 'no label', 'TEXTUSERID': 'no label', });
lyr_Healthfacilities_2.set('fieldLabels', {'FCODE': 'no label', 'FAC_NAME': 'no label', 'DISTRICT': 'no label', 'FACILITY': 'no label', 'PHONE': 'no label', 'BOX_NO': 'no label', 'FAX': 'no label', 'DIST_DHO': 'no label', 'TIME': 'no label', 'X': 'no label', 'Y': 'no label', 'CO_ORDINAT': 'no label', 'NEAR_FAC': 'no label', 'DATE_APPR': 'no label', 'ROAD': 'no label', 'NO_BED': 'no label', 'OCCUP_RATE': 'no label', 'DAT_CONSTR': 'no label', 'FUNDEDBY': 'no label', 'OWNER': 'no label', 'POPULATION': 'no label', 'NO_OP': 'no label', 'NO_BIRTH_': 'no label', 'PLAN_DHO': 'no label', 'PLAN_MOW': 'no label', 'DONATION': 'no label', 'PERC_DONA': 'no label', 'BUDG_APPRO': 'no label', 'BUDG_ACT': 'no label', 'COST_ACT': 'no label', 'DIFFER_BY': 'no label', 'REVENUE': 'no label', });
lyr_schools_3.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'District': 'no label', 'EMIS_Numbe': 'no label', 'School_Nam': 'no label', 'X_Coordina': 'no label', 'Y_Coordina': 'no label', 'male_stude': 'no label', 'female_stu': 'no label', 'Type': 'no label', 'Long': 'no label', 'Lat': 'no label', 'No_of_Teac': 'no label', });
lyr_rivers_4.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_mainroads_5.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_mainroads_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});