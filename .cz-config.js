'use strict';
module.exports = {
  types: [
    { value: 'feat', name: 'feat[新增]:    新的内容' },
    { value: 'fix', name: 'fix[修复]:    修复一个Bug' },
    { value: 'docs', name: 'docs[文档]:    变更的只有文档' },
    { value: 'refactor', name: 'refactor[重构]:    代码重构，注意和特性、修复区分开' },
    { value: 'chore', name: 'chore[工具]:    开发工具变动(构建、脚手架工具等)' },
    { value: 'revert', name: 'revert[回滚]:    代码回退' },
  ],
  scopes: [{ name: 'javascript' }, { name: 'typescript' }, { name: 'Vue' }, { name: 'node' }],
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100,
};
