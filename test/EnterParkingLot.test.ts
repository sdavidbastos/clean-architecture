import EnterParkingLot from "../src/core/useCase/EnterParkingLot";
import GetParkingLot from "../src/core/useCase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";

test("Should get parking lot", async function () {
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const parkingLot = await getParkingLot.execute("shopping");

    expect(parkingLot.code).toBe("shopping");
});

test("Should enter parking lot", async function () {
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");

    const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
    await enterParkingLot.execute(
        "shopping",
        "MMM-0001",
        new Date("2021-03-01T10:00:00")
    );

    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(
        parkingLotBeforeEnter.occupiedSpaces + 1
    );
});

test.skip("Should be closed", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotrepositorySQL = new ParkingLotRepositorySQL();

    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    await enterParkingLot.execute(
        "shopping",
        "MMM-0001",
        new Date("2021-03-01T23:00:00")
    );

    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});

test.skip("Should be full", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();

    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    await enterParkingLot.execute(
        "shopping",
        "MMM-0001",
        new Date("2021-03-01T10:00:00")
    );
    await enterParkingLot.execute(
        "shopping",
        "MMM-0002",
        new Date("2021-03-01T10:00:00")
    );
    await enterParkingLot.execute(
        "shopping",
        "MMM-0003",
        new Date("2021-03-01T10:00:00")
    );
    await enterParkingLot.execute(
        "shopping",
        "MMM-0004",
        new Date("2021-03-01T10:00:00")
    );
    await enterParkingLot.execute(
        "shopping",
        "MMM-0005",
        new Date("2021-03-01T10:00:00")
    );
    await enterParkingLot.execute(
        "shopping",
        "MMM-0006",
        new Date("2021-03-01T10:00:00")
    );

    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});
