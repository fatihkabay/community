import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./provider/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Car } from "./entity/car.entity";
import { CarModule } from "./provider/car/car.module";

@Module({
  imports: [
    UserModule,
    CarModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "CommunityDB",
      entities: [User, Car],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
