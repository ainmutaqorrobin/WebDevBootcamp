import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  imports: [DiskModule, CpuModule],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
