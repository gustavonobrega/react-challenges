export const menu = [
  {
    label: "Frontend",
    children: [
      {
        label: "src",
        children: [
          {
            label: "components",
            children: [
              {
                label: "card.tsx",
              },
              {
                label: "input.tsx",
              },
              {
                label: "button.tsx",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Backend",
    children: [
      {
        label: "package.json",
      },
      {
        label: "http",
        children: [
          {
            label: "server.ts",
          },
          {
            label: "routes",
            children: [
              {
                label: "auth",
                children: [
                  {
                    label: "create-account.ts",
                  },
                  {
                    label: "reset-password.ts",
                  },
                  {
                    label: "authenticate.ts",
                  },
                ],
              },
            ],
          },
          {
            label: "middlewares",
            children: [
              {
                label: "auth.ts",
              },
            ],
          },
        ],
      },
      {
        label: "utils",
        children: [
          {
            label: "capitalize.ts",
          },
        ],
      },
    ],
  },
];
