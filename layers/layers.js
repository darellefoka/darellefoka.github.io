var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REGIONSCAMEROUN_1 = new ol.format.GeoJSON();
var features_REGIONSCAMEROUN_1 = format_REGIONSCAMEROUN_1.readFeatures(json_REGIONSCAMEROUN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONSCAMEROUN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONSCAMEROUN_1.addFeatures(features_REGIONSCAMEROUN_1);
var lyr_REGIONSCAMEROUN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REGIONSCAMEROUN_1, 
                style: style_REGIONSCAMEROUN_1,
                interactive: true,
                title: '<img src="styles/legend/REGIONSCAMEROUN_1.png" /> REGIONS CAMEROUN'
            });
var format_AEROPORT_2 = new ol.format.GeoJSON();
var features_AEROPORT_2 = format_AEROPORT_2.readFeatures(json_AEROPORT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEROPORT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEROPORT_2.addFeatures(features_AEROPORT_2);
var lyr_AEROPORT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AEROPORT_2, 
                style: style_AEROPORT_2,
                interactive: true,
                title: '<img src="styles/legend/AEROPORT_2.png" /> AEROPORT'
            });

lyr_OSMStandard_0.setVisible(true);lyr_REGIONSCAMEROUN_1.setVisible(true);lyr_AEROPORT_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_REGIONSCAMEROUN_1,lyr_AEROPORT_2];
lyr_REGIONSCAMEROUN_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'name': 'name', 'ref_COG': 'ref_COG', });
lyr_AEROPORT_2.set('fieldAliases', {'osm_id': 'osm_id', 'aeroway': 'aeroway', 'name': 'name', 'access': 'access', });
lyr_REGIONSCAMEROUN_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'name': 'TextEdit', 'ref_COG': 'TextEdit', });
lyr_AEROPORT_2.set('fieldImages', {'osm_id': 'TextEdit', 'aeroway': 'TextEdit', 'name': 'TextEdit', 'access': 'TextEdit', });
lyr_REGIONSCAMEROUN_1.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'name': 'no label', 'ref_COG': 'no label', });
lyr_AEROPORT_2.set('fieldLabels', {'osm_id': 'no label', 'aeroway': 'no label', 'name': 'no label', 'access': 'no label', });
lyr_AEROPORT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});