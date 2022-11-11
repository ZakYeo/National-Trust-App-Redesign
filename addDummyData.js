export default function addDummyData({curData}) {
    curData[1].events = [{"name": "Guided Morning Walk", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
                              {"name": "Guided Evening Walk", "beginDay":"2022-11-19", "beginTime": "18:00", "endTime": "20:00"},
                              {"name": "Sponsored Walk", "beginDay":"2022-11-11", "beginTime": "08:00", "endTime": "11:00"}];

    curData[2].events = [{"name": "Example Event", "beginDay":"2022-11-15", "beginTime": "09:00", "endTime": "11:00"},
    {"name": "Example Event 2", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
    {"name": "Example Event 3", "beginDay":"2022-12-09", "beginTime": "08:00", "endTime": "11:00"}]

    curData[3].events = [{"name": "Example Event", "beginDay":"2022-11-15", "beginTime": "09:00", "endTime": "11:00"},
    {"name": "Example Event 2", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
    {"name": "Example Event 3", "beginDay":"2022-12-09", "beginTime": "08:00", "endTime": "11:00"}]

    curData[4].events = [{"name": "Example Event", "beginDay":"2022-11-15", "beginTime": "09:00", "endTime": "11:00"},
    {"name": "Example Event 2", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
    {"name": "Example Event 3", "beginDay":"2022-12-09", "beginTime": "08:00", "endTime": "11:00"}]

    curData[5].events = [{"name": "Example Event", "beginDay":"2022-11-15", "beginTime": "09:00", "endTime": "11:00"},
    {"name": "Example Event 2", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
    {"name": "Example Event 3", "beginDay":"2022-12-09", "beginTime": "08:00", "endTime": "11:00"}]


    return curData;
}