import chalk from "chalk";

const success = (msg: string) => {
  console.log(chalk.green(`✔ ${msg}`));
};

const error = (msg: string) => {
  console.log(chalk.red(`× ${msg}`));
};

const warning = (msg: string) => {
  console.log(chalk.yellow(`⚠️ ${msg}`));
};
export default { success, error, warning };
