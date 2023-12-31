import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private saltOrRounds = 10;
  async encrypt(data: string): Promise<string> {
    const hash = await bcrypt.hash(data, this.saltOrRounds);
    return hash;
  }

  async compare(data: string, buffer: string): Promise<boolean> {
    const result = await bcrypt.compare(data, buffer);
    return result;
  }
}
