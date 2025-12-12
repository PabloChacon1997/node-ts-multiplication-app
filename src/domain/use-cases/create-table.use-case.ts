
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}


export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase{
  constructor() {}

  execute({base, limit= 10}: CreateTableOptions) {
    let outputMessage = '';
    for (let num = 1; num <= limit; num++) {
      outputMessage += `${base} x ${num} = ${base * num}\n`;
    }

    return outputMessage;
  }
}