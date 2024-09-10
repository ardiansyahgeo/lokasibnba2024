var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1 = new ol.format.GeoJSON();
var features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1 = format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.readFeatures(json_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.addFeatures(features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1);
var lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1, 
                style: style_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1,
                popuplayertitle: "BATAS_RW_PRIORITAS_REV01_KODE_AREA",
                interactive: true,
    title: 'BATAS_RW_PRIORITAS_REV01_KODE_AREA<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_0.png" /> A1<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_1.png" /> A10<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_2.png" /> A100<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_3.png" /> A101<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_4.png" /> A102<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_5.png" /> A103<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_6.png" /> A104<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_7.png" /> A105<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_8.png" /> A106<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_9.png" /> A107<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_10.png" /> A108<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_11.png" /> A109<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_12.png" /> A11<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_13.png" /> A110<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_14.png" /> A111<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_15.png" /> A112<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_16.png" /> A113<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_17.png" /> A114<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_18.png" /> A115<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_19.png" /> A116<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_20.png" /> A117<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_21.png" /> A118<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_22.png" /> A119<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_23.png" /> A12<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_24.png" /> A120<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_25.png" /> A121<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_26.png" /> A122<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_27.png" /> A123<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_28.png" /> A124<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_29.png" /> A125<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_30.png" /> A126<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_31.png" /> A127<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_32.png" /> A128<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_33.png" /> A129<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_34.png" /> A13<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_35.png" /> A130<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_36.png" /> A131<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_37.png" /> A132<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_38.png" /> A133<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_39.png" /> A134<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_40.png" /> A135<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_41.png" /> A136<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_42.png" /> A137<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_43.png" /> A138<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_44.png" /> A139<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_45.png" /> A14<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_46.png" /> A140<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_47.png" /> A141<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_48.png" /> A142<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_49.png" /> A143<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_50.png" /> A144<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_51.png" /> A145<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_52.png" /> A146<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_53.png" /> A147<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_54.png" /> A148<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_55.png" /> A149<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_56.png" /> A15<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_57.png" /> A150<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_58.png" /> A151<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_59.png" /> A152<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_60.png" /> A153<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_61.png" /> A154<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_62.png" /> A155<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_63.png" /> A156<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_64.png" /> A157<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_65.png" /> A158<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_66.png" /> A159<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_67.png" /> A16<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_68.png" /> A160<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_69.png" /> A161<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_70.png" /> A162<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_71.png" /> A163<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_72.png" /> A164<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_73.png" /> A165<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_74.png" /> A166<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_75.png" /> A167<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_76.png" /> A168<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_77.png" /> A169<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_78.png" /> A17<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_79.png" /> A170<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_80.png" /> A171<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_81.png" /> A172<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_82.png" /> A173<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_83.png" /> A174<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_84.png" /> A175<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_85.png" /> A176<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_86.png" /> A177<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_87.png" /> A178<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_88.png" /> A179<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_89.png" /> A18<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_90.png" /> A180<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_91.png" /> A181<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_92.png" /> A182<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_93.png" /> A183<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_94.png" /> A184<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_95.png" /> A185<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_96.png" /> A186<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_97.png" /> A187<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_98.png" /> A188<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_99.png" /> A189<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_100.png" /> A19<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_101.png" /> A190<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_102.png" /> A191<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_103.png" /> A192<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_104.png" /> A193<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_105.png" /> A194<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_106.png" /> A195<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_107.png" /> A196<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_108.png" /> A197<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_109.png" /> A198<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_110.png" /> A199<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_111.png" /> A2<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_112.png" /> A20<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_113.png" /> A200<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_114.png" /> A201<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_115.png" /> A202<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_116.png" /> A203<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_117.png" /> A204<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_118.png" /> A205<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_119.png" /> A206<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_120.png" /> A207<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_121.png" /> A208<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_122.png" /> A209<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_123.png" /> A21<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_124.png" /> A210<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_125.png" /> A211<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_126.png" /> A212<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_127.png" /> A213<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_128.png" /> A214<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_129.png" /> A215<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_130.png" /> A216<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_131.png" /> A217<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_132.png" /> A218<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_133.png" /> A22<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_134.png" /> A23<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_135.png" /> A24<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_136.png" /> A25<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_137.png" /> A26<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_138.png" /> A27<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_139.png" /> A28<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_140.png" /> A29<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_141.png" /> A3<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_142.png" /> A30<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_143.png" /> A31<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_144.png" /> A32<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_145.png" /> A33<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_146.png" /> A34<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_147.png" /> A35<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_148.png" /> A36<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_149.png" /> A37<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_150.png" /> A38<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_151.png" /> A39<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_152.png" /> A4<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_153.png" /> A40<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_154.png" /> A41<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_155.png" /> A42<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_156.png" /> A43<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_157.png" /> A44<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_158.png" /> A45<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_159.png" /> A46<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_160.png" /> A47<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_161.png" /> A48<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_162.png" /> A49<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_163.png" /> A5<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_164.png" /> A50<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_165.png" /> A51<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_166.png" /> A52<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_167.png" /> A53<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_168.png" /> A54<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_169.png" /> A55<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_170.png" /> A56<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_171.png" /> A57<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_172.png" /> A58<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_173.png" /> A59<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_174.png" /> A6<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_175.png" /> A60<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_176.png" /> A61<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_177.png" /> A62<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_178.png" /> A63<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_179.png" /> A64<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_180.png" /> A65<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_181.png" /> A66<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_182.png" /> A67<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_183.png" /> A68<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_184.png" /> A69<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_185.png" /> A7<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_186.png" /> A70<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_187.png" /> A71<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_188.png" /> A72<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_189.png" /> A73<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_190.png" /> A74<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_191.png" /> A75<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_192.png" /> A76<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_193.png" /> A77<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_194.png" /> A78<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_195.png" /> A79<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_196.png" /> A8<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_197.png" /> A80<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_198.png" /> A81<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_199.png" /> A82<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_200.png" /> A83<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_201.png" /> A84<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_202.png" /> A85<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_203.png" /> A86<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_204.png" /> A87<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_205.png" /> A88<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_206.png" /> A89<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_207.png" /> A9<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_208.png" /> A90<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_209.png" /> A91<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_210.png" /> A92<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_211.png" /> A93<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_212.png" /> A94<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_213.png" /> A95<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_214.png" /> A96<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_215.png" /> A97<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_216.png" /> A98<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_217.png" /> A99<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_218.png" /> B1<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_219.png" /> B10<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_220.png" /> B100<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_221.png" /> B101<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_222.png" /> B102<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_223.png" /> B103<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_224.png" /> B104<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_225.png" /> B105<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_226.png" /> B106<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_227.png" /> B107<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_228.png" /> B108<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_229.png" /> B109<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_230.png" /> B11<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_231.png" /> B110<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_232.png" /> B111<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_233.png" /> B112<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_234.png" /> B113<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_235.png" /> B114<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_236.png" /> B115<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_237.png" /> B116<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_238.png" /> B117<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_239.png" /> B118<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_240.png" /> B119<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_241.png" /> B12<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_242.png" /> B120<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_243.png" /> B121<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_244.png" /> B122<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_245.png" /> B123<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_246.png" /> B124<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_247.png" /> B125<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_248.png" /> B126<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_249.png" /> B127<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_250.png" /> B128<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_251.png" /> B129<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_252.png" /> B13<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_253.png" /> B130<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_254.png" /> B131<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_255.png" /> B132<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_256.png" /> B133<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_257.png" /> B134<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_258.png" /> B135<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_259.png" /> B136<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_260.png" /> B137<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_261.png" /> B138<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_262.png" /> B139<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_263.png" /> B14<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_264.png" /> B140<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_265.png" /> B15<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_266.png" /> B16<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_267.png" /> B17<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_268.png" /> B18<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_269.png" /> B19<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_270.png" /> B2<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_271.png" /> B20<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_272.png" /> B21<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_273.png" /> B22<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_274.png" /> B23<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_275.png" /> B24<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_276.png" /> B25<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_277.png" /> B26<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_278.png" /> B27<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_279.png" /> B28<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_280.png" /> B29<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_281.png" /> B3<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_282.png" /> B30<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_283.png" /> B31<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_284.png" /> B32<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_285.png" /> B33<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_286.png" /> B34<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_287.png" /> B35<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_288.png" /> B36<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_289.png" /> B37<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_290.png" /> B38<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_291.png" /> B39<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_292.png" /> B4<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_293.png" /> B40<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_294.png" /> B41<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_295.png" /> B42<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_296.png" /> B43<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_297.png" /> B44<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_298.png" /> B45<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_299.png" /> B46<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_300.png" /> B47<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_301.png" /> B48<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_302.png" /> B49<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_303.png" /> B5<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_304.png" /> B50<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_305.png" /> B51<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_306.png" /> B52<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_307.png" /> B53<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_308.png" /> B54<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_309.png" /> B55<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_310.png" /> B56<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_311.png" /> B57<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_312.png" /> B58<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_313.png" /> B59<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_314.png" /> B6<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_315.png" /> B60<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_316.png" /> B61<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_317.png" /> B62<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_318.png" /> B63<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_319.png" /> B64<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_320.png" /> B65<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_321.png" /> B66<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_322.png" /> B67<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_323.png" /> B68<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_324.png" /> B69<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_325.png" /> B7<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_326.png" /> B70<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_327.png" /> B71<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_328.png" /> B72<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_329.png" /> B73<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_330.png" /> B74<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_331.png" /> B75<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_332.png" /> B76<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_333.png" /> B77<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_334.png" /> B78<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_335.png" /> B79<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_336.png" /> B8<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_337.png" /> B80<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_338.png" /> B81<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_339.png" /> B82<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_340.png" /> B83<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_341.png" /> B84<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_342.png" /> B85<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_343.png" /> B86<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_344.png" /> B87<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_345.png" /> B88<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_346.png" /> B89<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_347.png" /> B9<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_348.png" /> B90<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_349.png" /> B91<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_350.png" /> B92<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_351.png" /> B93<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_352.png" /> B94<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_353.png" /> B95<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_354.png" /> B96<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_355.png" /> B97<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_356.png" /> B98<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_357.png" /> B99<br />\
    <img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_1_358.png" /> <br />'
        });
var format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2 = new ol.format.GeoJSON();
var features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2 = format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.readFeatures(json_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.addFeatures(features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2);
var lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2, 
                style: style_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2,
                popuplayertitle: "BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW",
                interactive: true,
                title: '<img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.png" /> BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW'
            });
var format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3 = new ol.format.GeoJSON();
var features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3 = format_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.readFeatures(json_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.addFeatures(features_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3);
var lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3, 
                style: style_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3,
                popuplayertitle: "BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA",
                interactive: true,
                title: '<img src="styles/legend/BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.png" /> BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.setVisible(true);lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.setVisible(true);lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1,lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2,lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3];
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMRW': 'WADMRW', 'ID_RW': 'ID_RW', 'PRIORITAS': 'PRIORITAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'kode_area': 'kode_area', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.set('fieldAliases', {'kode_area': 'kode_area', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMRW': 'TextEdit', 'ID_RW': 'TextEdit', 'PRIORITAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'kode_area': 'TextEdit', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.set('fieldImages', {'kode_area': 'TextEdit', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Join_Count': 'inline label - always visible', 'TARGET_FID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMRW': 'inline label - always visible', 'ID_RW': 'inline label - always visible', 'PRIORITAS': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'kode_area': 'inline label - always visible', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_RW_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.set('fieldLabels', {'kode_area': 'inline label - always visible', });
lyr_BATAS_RW_PRIORITAS_REV01_KODE_AREA_dissolve_KODEAREA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});