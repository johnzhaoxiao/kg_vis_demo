 const init_data = {
    "nodes": [
        {
            "id": "0",
            "label": "Person",
            "size": 30,
            "properties": {
                "role": "自然人股东",
                "name": "刘德",
                "image": "http://148.70.238.152/static/image/github.png"
            }
        },
        {
            "id": "1",
            "label": "Company",
            "size": 30,
            "properties": {
                "registCapi": "5000.000",
                "name": "有品信息科技有限公司",
                "econKind": "有限责任公司(自然人投资或控股)",
                "status": "存续"
            }
        },
        {
            "id": "2",
            "size": 30,
            "label": "Company",
            "properties": {
                "name": "有品信息科技有限公司",
            }
        },
        {
            "id": "3",
            "size": 30,
            "label": "Company",
            "properties": {
                "registCapi": "5000.000",
            }
        }
    ],
    "links": [
        {
            "type": "EMPLOY",
            "source": "0",
            "target": "1",
            "properties": {
                "role": "董事"
            }
        },
        {
            "type": "EMPLOY",
            "source": "1",
            "target": "2",
            "properties": {
                "role": "董事"
            }
        },
        {
            "type": "EMPLOY",
            "source": "2",
            "target": "3",
            "properties": {
                "role": "董事"
            }
        },
        {
            "type": "EMPLOY",
            "source": "0",
            "target": "2",
            "properties": {
                "role": "董事"
            }
        }
    ]
}