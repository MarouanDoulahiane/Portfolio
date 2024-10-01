import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from './db.module'; // Adjust the path as needed
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';  // Import ConfigModule
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('DbModule', () => {
  let app: TestingModule;
  let configService: ConfigService;
  let dataSource: DataSource;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }), // Load configuration globally
        DbModule, // Import your DbModule which sets up TypeOrmModule
        TypeOrmModule.forRootAsync({ // Ensure TypeOrmModule is part of the testing environment
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: parseInt(configService.get<string>('DB_PORT'), 10),
            username: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_DATABASE'),
            entities: [], // If needed, point to your entities
            synchronize: true, // Set this to true for testing purposes
          }),
        }),
      ],
    }).compile();

    configService = app.get<ConfigService>(ConfigService); // Get the config service
		dataSource = app.get<DataSource>(DataSource); // Get the TypeORM DataSource
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should provide database configurations', () => {
    expect(configService.get('DB_HOST')).toBeDefined();
    expect(configService.get('DB_PORT')).toBeDefined();
    expect(configService.get('DB_USERNAME')).toBeDefined();
    expect(configService.get('DB_PASSWORD')).toBeDefined();
    expect(configService.get('DB_DATABASE')).toBeDefined();
  });

  it('should connect to the database', async () => {
		// Check if the connection is established
		expect(dataSource.isInitialized).toBe(true);
		const result = await dataSource.query('SELECT 1');
		expect(result).toBeDefined();
	});


  afterAll(async () => {
		await dataSource.destroy(); // Close the connection
    await app.close(); // Clean up after tests
  });
});
