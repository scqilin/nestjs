import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './module/admin/user.entity';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/admin/default/default.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qilin',
      password: 'qilin1211',
      database: 'test',
      entities: [User],
      synchronize: true,
      retryDelay: 300, // 两次重试连接的间隔(ms)（默认：3000）
      retryAttempts: 10, // 重试连接数据库的次数（默认：10）
    }),
    AdminModule,
    ApiModule,
    DefaultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
