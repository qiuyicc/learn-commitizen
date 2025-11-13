module.exports = {
  types: [
    { value: "feat", name: "feat:添加新功能" },
    { value: "fix", name: "fix:修复bug" },
    { value: "docs", name: "docs:文档修改" },
    {
      value: "style",
      name: "style:样式修改",
    },
    {
      value: "refactor",
      name: "refactor:代码重构",
    },
    {
      value: "perf",
      name: "perf:性能优化",
    },
    { value: "test", name: "test:添加测试" },
    {
      value: "chore",
        name: "chore:构建过程或辅助工具的修改以及库的修改",
    },
    { value: "revert", name: "revert:回退" },
    { value: "WIP", name: "WIP:开发中" },
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" },
  ],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  prependTicketToHead: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'

  scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "e2eTest" },
      { name: "unitTest" },
    ],
  },

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
