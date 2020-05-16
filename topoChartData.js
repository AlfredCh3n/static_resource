var topoChartData = {
  nodeDataArray: [
    {
      key: "root",
      group: "",
      category: "root",
      root: {
        name: "根节点"
      },
      isGroup: false
    },
    {
      key: "1,1",
      group: "",
      category: "layerTwoNodeInfo",
      layerTwoNodeInfo: {
        name: "默认组织/默认组织",
        count: 5,
        category: "orgnizInfo",
        parentId: 1,
        parentName: "默认组织",
        childId: 1,
        childName: "默认组织",
      },
      isGroup: false
    },
    {
      key: "DevNull,DevNull",
      group: "",
      category: "layerTwoNodeInfo",
      layerTwoNodeInfo: {
        name: "未配置",
      },
      isGroup: false
    },
    {
      key: "5454efcd-14bb-4425-900c-de24767daf23",
      group: "",
      category: "layerThreeNodeInfo",
      layerThreeNodeInfo: {
        devUuid: "5454efcd-14bb-4425-900c-de24767daf23",
        devName: "1.20",
        devStatus: 1,
      },
      isGroup: false
    },
    {
      key: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      group: "",
      category: "layerThreeNodeInfo",
      layerThreeNodeInfo: {
        devUuid: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
        devName: "1.74",
        devStatus: 1,
      },
      isGroup: false
    },
    {
      key: "386108c1-c180-437b-9512-701bf829b620",
      group: "",
      category: "layerThreeNodeInfo",
      layerThreeNodeInfo: {
        devUuid: "386108c1-c180-437b-9512-701bf829b620",
        devName: "1.57-",
        devStatus: 1,
      },
      isGroup: false
    },
    {
      key: "e32b804b-71e2-45aa-b65f-f46f5853d3f5",
      group: "",
      category: "layerThreeNodeInfo",
      layerThreeNodeInfo: {
        devUuid: "e32b804b-71e2-45aa-b65f-f46f5853d3f5",
        devName: "1.221",
        devStatus: 0,
      },
      isGroup: false
    },
    {
      key: "f378fada-ec81-4b85-9fb4-8bdfc8ea43a5",
      group: "",
      category: "layerThreeNodeInfo",
      layerThreeNodeInfo: {
        devUuid: "f378fada-ec81-4b85-9fb4-8bdfc8ea43a5",
        devName: "1.110",
        devStatus: 0,
      },
      isGroup: false
    },
    {
      key: "DevUuidNull",
      group: "",
      category: "layerThreeNodeInfo2",
      layerThreeNodeInfo2: {
        devName: "未配置",
      },
      isGroup: false
    },
    {
      key: "P1",
      group: "",
      category: "layerFourGroupOneInfo",
      layerFourGroupOneInfo: {
        name: "默认组织",
        parentId: 1,
        parentName: "默认组织",
      },
      isGroup: true
    },
    {
      key: "C1",
      group: "P1",
      category: "layerFourGroupTwoInfo",
      layerFourGroupTwoInfo: {
        name: "默认组织",
        parentId: 1,
        parentName: "默认组织",
        childId: 1,
        childName: "默认组织",
        count: "10"
      },
      isGroup: true
    },
    {
      key: "DB78",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 78,
        dbUuid: "1b8cd73e-75c0-4940-beec-394a9f27be84",
        dbName: "test",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DB69",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 69,
        dbUuid: "1e757f87-eee0-44e2-8cf9-dbe47df8cf6e",
        dbName: "1.62",
        dbStatus: 3,
        isProtected: 1,
        dbFlag: "386108c1-c180-437b-9512-701bf829b620,,"
      },
      isGroup: false
    },
    {
      key: "DB42",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 42,
        dbUuid: "228ff1d5-cd1f-4ca6-8753-cfab97be89c5",
        dbName: "user",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DB63",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 63,
        dbUuid: "371444a9-f2ed-4b5b-a3ec-1354833bb91c",
        dbName: "测试2",
        dbStatus: 4,
        isProtected: 1,
        dbFlag: "386108c1-c180-437b-9512-701bf829b620"
      },
      isGroup: false
    },
    {
      key: "DB77",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 77,
        dbUuid: "83a0c5a8-683c-42ed-bf32-74a766a87b39",
        dbName: "q",
        dbStatus: 2,
        isProtected: 1,
        dbFlag:
          "f378fada-ec81-4b85-9fb4-8bdfc8ea43a5,52d59c8d-1f8b-4405-8036-dfe51e8419f1"
      },
      isGroup: false
    },
    {
      key: "DB70",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 70,
        dbUuid: "91f9c584-5fc1-4418-9c3f-b906dea19e31",
        dbName: "Syslog\ufffdʲ\ufffd\ufffd\ufffd\ufffd",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DB65",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 65,
        dbUuid: "a5a8408f-1b93-4e7b-9f5d-22c8758c46b5",
        dbName: "55test",
        dbStatus: 10,
        isProtected: 1,
        dbFlag:
          "52d59c8d-1f8b-4405-8036-dfe51e8419f1,386108c1-c180-437b-9512-701bf829b620"
      },
      isGroup: false
    },
    {
      key: "DB71",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 71,
        dbUuid: "bb573cb7-7575-4f71-b638-7bd58cc86915",
        dbName: "MySQL-1.112-3306-0",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DB49",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 49,
        dbUuid: "cd8fac06-b4e0-4c41-b13b-33d318c6fc1a",
        dbName: "1.61",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DB48",
      group: "C1",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 48,
        dbUuid: "e47c8499-6311-4fb1-a5cf-bea6798bdcce",
        dbName: "1.202",
        isProtected: 0,
      },
      isGroup: false
    },
    {
      key: "DbAddC1",
      group: "C1",
      category: "layerFourNodeInfo2",
      layerFourNodeInfo2: {
        id: "1"
      },
      isGroup: false
    },
    {
      key: "P2",
      group: "",
      category: "layerFourGroupOneInfo",
      layerFourGroupOneInfo: {
        name: "研发部",
        parentId: 2,
        parentName: "研发部",
      },
      isGroup: true
    },
    {
      key: "C2",
      group: "P2",
      category: "layerFourGroupTwoInfo",
      layerFourGroupTwoInfo: {
        name: "研发部",
        parentId: 2,
        parentName: "研发部",
        childId: 2,
        childName: "研发部",
        count: "2"
      },
      isGroup: true
    },
    {
      key: "DB67",
      group: "C2",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 67,
        dbUuid: "6bba3b6c-3cf1-4516-b89b-f3df8360446a",
        dbName: "重名测试",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "52d59c8d-1f8b-4405-8036-dfe51e8419f1"
      },
      isGroup: false
    },
    {
      key: "DB68",
      group: "C2",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 68,
        dbUuid: "debcd5ba-bfaf-46e5-b2e2-e0c985fc3914",
        dbName: "1.171",
        isProtected: 1,
        dbFlag: "52d59c8d-1f8b-4405-8036-dfe51e8419f1"
      },
      isGroup: false
    },
    {
      key: "DbAddC2",
      group: "C2",
      category: "layerFourNodeInfo2",
      layerFourNodeInfo2: {
        id: "2"
      },
      isGroup: false
    },
    {
      key: "C3",
      group: "P2",
      category: "layerFourGroupTwoInfo",
      layerFourGroupTwoInfo: {
        name: "软件一部",
        parentId: 2,
        parentName: "研发部",
        childId: 3,
        childName: "软件一部",
        count: "7"
      },
      isGroup: true
    },
    {
      key: "DB62",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 62,
        dbUuid: "07925248-4e72-4bf1-b5a2-8f4cd70de9a5",
        dbName: "1.20-自动确认测试",
        dbStatus: 2,
        isProtected: 1,
        dbFlag:
          "b6e85b6e-dbff-4bdc-80f9-2500088d3f92,386108c1-c180-437b-9512-701bf829b620"
      },
      isGroup: false
    },
    {
      key: "DB59",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 59,
        dbUuid: "38e83e06-9a4c-4db7-80eb-683f8930ae19",
        dbName: "测试类型2",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "b6e85b6e-dbff-4bdc-80f9-2500088d3f92"
      },
      isGroup: false
    },
    {
      key: "DB57",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 57,
        dbUuid: "45db9567-3b30-4117-9313-bff3f65e5469",
        dbName: "测试类型4",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "b6e85b6e-dbff-4bdc-80f9-2500088d3f92"
      },
      isGroup: false
    },
    {
      key: "DB61",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 61,
        dbUuid: "69b75fed-a3a3-48ee-9d81-2f505246e931",
        dbName: "测试",
        dbStatus: 2,
        isProtected: 1,
        dbFlag:
          "b6e85b6e-dbff-4bdc-80f9-2500088d3f92,386108c1-c180-437b-9512-701bf829b620"
      },
      isGroup: false
    },
    {
      key: "DB60",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 60,
        dbUuid: "85c3642b-2f3e-4d60-88ca-d2c2de08c485",
        dbName: "测试类型1",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "b6e85b6e-dbff-4bdc-80f9-2500088d3f92"
      },
      isGroup: false
    },
    {
      key: "DB58",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 58,
        dbUuid: "d6ffe611-3ad0-4258-8955-b4ad1fb68f3d",
        dbName: "测试类型3",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "b6e85b6e-dbff-4bdc-80f9-2500088d3f92"
      },
      isGroup: false
    },
    {
      key: "DB56",
      group: "C3",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 56,
        dbUuid: "e95e62ac-db41-4d2e-a6d9-cb734cf95a55",
        dbName: "测试类型5",
        dbStatus: null,
        isProtected: 1,
        dbFlag: "b6e85b6e-dbff-4bdc-80f9-2500088d3f92"
      },
      isGroup: false
    },
    {
      key: "DbAddC3",
      group: "C3",
      category: "layerFourNodeInfo2",
      layerFourNodeInfo2: {
        id: "3"
      },
      isGroup: false
    },
    {
      key: "C5",
      group: "P2",
      category: "layerFourGroupTwoInfo",
      layerFourGroupTwoInfo: {
        name: "软件三部",
        parentId: 2,
        parentName: "研发部",
        childId: 5,
        childName: "软件三部",
        dbName: null,
        count: "1"
      },
      isGroup: true
    },
    {
      key: "DB76",
      group: "C5",
      category: "layerFourNodeInfo",
      layerFourNodeInfo: {
        dbId: 76,
        dbUuid: "3d535c16-df76-425c-9509-6c2ed907343a",
        dbName: "1.122-自动确认测试",
        dbStatus: 3,
        isProtected: 1,
        dbFlag: "386108c1-c180-437b-9512-701bf829b620"
      },
      isGroup: false
    },
    {
      key: "DbAddC5",
      group: "C5",
      category: "layerFourNodeInfo2",
      layerFourNodeInfo2: {
        id: "5"
      },
      isGroup: false
    }
  ],
  linkDataArray: [
    {
      from: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      to: "DB67",
      category: "layerThreeNodeInfo"
    },
    {
      from: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      to: "DB77",
      category: "layerThreeNodeInfo"
    },
    {
      from: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      to: "DB65",
      category: "layerThreeNodeInfo"
    },
    {
      from: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      to: "DB68",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB62",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB69",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB63",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB76",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB61",
      category: "layerThreeNodeInfo"
    },
    {
      from: "386108c1-c180-437b-9512-701bf829b620",
      to: "DB65",
      category: "layerThreeNodeInfo"
    },
    {
      from: "f378fada-ec81-4b85-9fb4-8bdfc8ea43a5",
      to: "DB77",
      category: "layerThreeNodeInfo"
    },
    {
      from: "DevUuidNull",
      to: "DB78",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "DevUuidNull",
      to: "DB42",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "DevUuidNull",
      to: "DB70",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "DevUuidNull",
      to: "DB71",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "DevUuidNull",
      to: "DB49",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "DevUuidNull",
      to: "DB48",
      category: "layerThreeNodeInfo2"
    },
    {
      from: "root",
      to: "1,1",
      category: "root"
    },
    {
      from: "root",
      to: "DevNull,DevNull",
      category: "root"
    },
    {
      from: "1,1",
      to: "5454efcd-14bb-4425-900c-de24767daf23",
      category: "layerTwoNodeInfo"
    },
    {
      from: "1,1",
      to: "52d59c8d-1f8b-4405-8036-dfe51e8419f1",
      category: "layerTwoNodeInfo"
    },
    {
      from: "1,1",
      to: "386108c1-c180-437b-9512-701bf829b620",
      category: "layerTwoNodeInfo"
    },
    {
      from: "1,1",
      to: "e32b804b-71e2-45aa-b65f-f46f5853d3f5",
      category: "layerTwoNodeInfo"
    },
    {
      from: "1,1",
      to: "f378fada-ec81-4b85-9fb4-8bdfc8ea43a5",
      category: "layerTwoNodeInfo"
    },
    {
      from: "DevNull,DevNull",
      to: "DevUuidNull",
      category: "layerTwoNodeInfo"
    }
  ],
  firstDevKey: "5454efcd-14bb-4425-900c-de24767daf23"
};
export default topoChartData;
