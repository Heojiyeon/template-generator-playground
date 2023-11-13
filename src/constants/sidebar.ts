export const SIDEBAR_OPTIONS_BY_TYPE = [
  {
    type: 'basic',
    name: '기본 문항',
    options: [
      {
        type: 'text',
        name: '텍스트',
      },
      {
        type: 'media',
        name: '미디어',
      },
      {
        type: 'select',
        name: '선택형',
      },
    ],
  },
  {
    type: 'specialty',
    name: '전문 문항',
    options: [
      {
        type: 'pain-level',
        name: '통증 정도',
      },
      {
        type: 'pain-questionnaire',
        name: '통증 문진',
      },
      {
        type: 'condition',
        name: '오늘의 컨디션',
      },
    ],
  },
];
